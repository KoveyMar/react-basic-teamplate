import { useState, useEffect, useRef } from 'react';
import { Table, Card, Empty } from 'antd';
import WrapperContext from '@/context/ChildContext';
import type {
    SysResponse,
    DataSource,
    TablePage,
    TableListState as State,
    TableListProps as Props,
} from '@/types';
import TableHeader from './comp/TableHeader';
import TableOperation from './comp/TableOperation';

const initPage: TablePage = {
    showQuickJumper: !0,
    showSizeChanger: !0,
    total: 0,
    pageSize: 10,
    current: 1,
    showTotal: (total: number) => `共 ${total} 条`,
};

/**
 * @description 数据列表组件
 * @param {TableListProps} props
 * @returns {JSX.Element}
 */
export default function TableList(props: Props): JSX.Element {
    const {
        tableProps,
        query,
        operation,
        header,
        wrapper,
        otherParams,
        refresh,
        notFuzzy,
    } = props;
    const { pagination } = tableProps;
    const QueryRef = useRef<any>(null);
    const [dataSource, setDataSource] = useState<State['dataSource']>([]);
    const [tablePage, setTablePage] = useState<State['tablePage']>(initPage);
    const [spinning, setSpinning] = useState<State['loading']>(!1);

    /**
     * @description
     * @date 2021-10-19
     * @param {any} params 设置查询参数
     * @returns {void}
     */
    function queryTableList(params?: any): void {
        const queryParams = getQueryParams(params);
        setSpinning(!0);
        query(queryParams)
            .then((res: SysResponse<DataSource>) => {
                const { code, success, data } = res;
                if (code === 200 || !!success) {
                    const { records, current, size: pageSize, total } = data;
                    setDataSource(records);
                    setTablePage({ ...tablePage, current, pageSize, total });
                }
            })
            .finally(() => {
                setSpinning(!1);
            });
    }

    /**
     * @description 翻页查询
     * @date 2021-07-09
     * @param {number} current
     * @param {number| void} size
     * @returns {void}
     */
    function onPageChange(current: number, size?: number | void): void {
        const pageParams = {
            current,
            size,
        };
        queryTableList(pageParams);
    }

    /**
     * @description 获取查询参数
     * @date 2021-10-19
     * @param {any} query
     * @returns {Object}
     */
    function getQueryParams(query?: any): Object {
        const form = QueryRef.current.getFuzzy();
        let queryParams = {
            current: tablePage.current,
            size: tablePage.pageSize,
            ...otherParams,
            ...query,
            ...form,
        };
        if (!!pagination) {
            const { current, pageSize: size } = pagination;
            queryParams = {
                ...queryParams,
                current,
                size,
            };
        }
        return queryParams;
    }

    /**
     * @description 初始化
     * @date 2021-07-09
     * @returns {void}
     */
    function init(): void {
        if (refresh) {
            !refresh.length ? queryTableList() : setSpinning(!0);
        }
    }

    useEffect(() => {
        init();
    }, [refresh]);

    return (
        <Card bordered={!1} className={'main-table'}>
            <WrapperContext.Provider value={wrapper}>
                <TableHeader
                    queryTableList={queryTableList}
                    header={header}
                    notFuzzy={notFuzzy}
                    tablePage={tablePage}
                    ref={QueryRef}
                />
            </WrapperContext.Provider>

            <TableOperation operation={operation} />

            <Table
                bordered={!0}
                {...tableProps}
                pagination={{
                    ...pagination,
                    ...tablePage,
                    onChange: onPageChange,
                }}
                locale={{
                    emptyText: spinning ? (
                        <></>
                    ) : (
                        <Empty description="无数据" />
                    ),
                }}
                loading={{
                    spinning,
                    tip: '数据加载中...',
                }}
                dataSource={dataSource}
            />
        </Card>
    );
}
