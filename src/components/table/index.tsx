import { useState, useEffect } from 'react';
import { Table, Card, TablePaginationConfig } from 'antd';
import ChildContext from '@/context/ChildContext';
import { SysResponse, DataSource, TableListProps as Props } from '@/types';
import TableHeader from './comp/TableHeader';
import TableOpertion from './comp/TableOpertion';

interface State {
    dataSource: Array<any>;
    tablePage: TablePaginationConfig;
}

const initPage: TablePaginationConfig = {
    total: 0,
    pageSize: 10,
    current: 1,
    showTotal: (total: number) => `共 ${total} 条`,
};

function TableList(props: Props, state: State): JSX.Element {
    const { tabelProps, query, opeartion, header, wrapper } = props;
    const { pagination } = tabelProps;
    const [dataSource, setDataSource] = useState<Array<any>>();
    const [tablePage, setTablePage] = useState<TablePaginationConfig>(initPage);

    /**
     * @description 查询列表
     * @date 2021-07-09
     * @returns {any}
     */
    const queryTableList = (others?: any): void => {
        const queryParams = getQueryParams(others);
        query(queryParams).then((res: SysResponse<DataSource>) => {
            if (res.code === 200 || !!res.success) {
                const { records, current, size: pageSize, total } = res.result;
                setDataSource(records);
                setTablePage({ ...tablePage, current, pageSize, total });
            }
        });
    };

    /**
     * @description 翻页查询
     * @date 2021-07-09
     * @param {any} page:number
     * @param {any} pageSize:number
     * @returns {any}
     */
    const onPageChange = (page: number, pageSize?: number | void): void => {
        let pageParams = {
            pageNo: page,
            pageSize,
        };
        queryTableList(pageParams);
    };

    /**
     * @description 获取查询参数
     * @date 2021-07-09
     * @param {any} p?:any
     * @returns {any}
     */
    const getQueryParams = (other?: any): any => {
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
        return params;
    };

    /**
     * @description 初始化
     * @date 2021-07-09
     * @returns {any}
     */
    const init = (): void => {
        queryTableList();
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <Card bordered={false}>
            <ChildContext.Provider value={wrapper}>
                <TableHeader queryTableList={queryTableList} header={header} />
            </ChildContext.Provider>

            <TableOpertion opeartion={opeartion} />

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
