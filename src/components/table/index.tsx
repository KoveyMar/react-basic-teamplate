import { useState, useEffect } from 'react';
import { Table, Card } from 'antd';
import ChildContext from '@/context/ChildContext';
import {
    SysResponse,
    DataSource,
    TableListPagesProps,
    TableListState as State,
    TableListProps as Props,
} from '@/types';
import Style from '@/styles/tableList.less';
import TableHeader from './comp/TableHeader';
import TableOpertion from './comp/TableOpertion';

const initPage: TableListPagesProps = {
    total: 0,
    pageSize: 10,
    current: 1,
    showTotal: (total: number) => `共 ${total} 条`,
};

function TableList(props: Props, state: State): JSX.Element {
    const { tabelProps, query, operation, header, wrapper, fuzzy } = props;
    const { pagination } = tabelProps;
    const [dataSource, setDataSource] = useState<State['dataSource']>();
    const [tablePage, setTablePage] = useState<State['tablePage']>(initPage);

    /**
     * @name    queryTableList
     * @description 查询列表
     * @date 2021-07-09
     * @returns {any}
     */
    function queryTableList(others?: any): void {
        const queryParams = getQueryParams(others);
        query(queryParams).then((res: SysResponse<DataSource>) => {
            if (res.code === 200 || !!res.success) {
                const { records, current, size: pageSize, total } = res.result;
                setDataSource(records);
                setTablePage({ ...tablePage, current, pageSize, total });
            }
        });
    }

    /**
     * @name    onPageChange
     * @description 翻页查询
     * @date 2021-07-09
     * @param {any} page:number
     * @param {any} pageSize:number
     * @returns {any}
     */
    function onPageChange(page: number, pageSize?: number | void): void {
        const pageParams = {
            pageNo: page,
            pageSize,
        };
        queryTableList(pageParams);
    }

    /**
     * @name    getQueryParams
     * @description 获取查询参数
     * @date 2021-07-09
     * @param {any} p?:any
     * @returns {any}
     */
    function getQueryParams(other?: any): {} {
        let params = {
            pageNo: tablePage.current,
            pageSize: tablePage.pageSize,
            ...other,
        };
        if (!!pagination) {
            const { current: pageNo, pageSize } = pagination;
            params = {
                ...params,
                pageNo,
                pageSize,
            };
        }
        return getFuzzyParams(params);
    }

    /**
     * @name    getFuzzyParams
     * @description 筛除列表模糊查询字段
     * @date 2022-03-29
     * @param {any} params:any
     * @returns {any}
     */
    function getFuzzyParams(params: any): {} {
        const { pageNo, pageSize, ...Fparams } = params;
        let NotFuzzy: any = {};
        if (fuzzy && fuzzy.length) {
            for (let value of Object.keys(Fparams)) {
                if (fuzzy.indexOf(value) === -1) {
                    NotFuzzy[value] = params[value];
                }
            }
        }
        return { pageNo, pageSize, ...NotFuzzy };
    }

    /**
     * @name    init
     * @description 初始化
     * @date 2021-07-09
     * @returns {any}
     */
    function init(): void {
        queryTableList();
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <Card bordered={false} className={Style['main-table']}>
            <ChildContext.Provider value={wrapper}>
                <TableHeader queryTableList={queryTableList} header={header} />
            </ChildContext.Provider>

            <TableOpertion operation={operation} />

            <Table
                bordered={!0}
                {...tabelProps}
                pagination={{
                    ...pagination,
                    ...tablePage,
                    onChange: onPageChange,
                }}
                dataSource={dataSource}
            />
        </Card>
    );
}

export default TableList;
