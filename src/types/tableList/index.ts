import type { TableProps, TableColumnProps, TablePaginationConfig } from 'antd';
import type { RenderNode, FormListProps, WrapperTypes, SysResponse } from '..';

type Source = Record<string, number | boolean | void | null>;

/**
 * @description Table Search Params
 */
export type SearchTypes = FormListProps;

/**
 * @description Table Search new button
 */
export type SearchButtonTypes = JSX.Element | boolean;

/**
 * @description NotFuzzy String Array
 */
export type NotFuzzy = Array<string> | void;

/**
 * @description Table   DataSource
 * @type    {Array<T>}  records DataSource
 * @type    {number}    current pageCurrent
 * @type    {number}    size    pageSize
 * @type    {number}    total   pageTotal
 */
export type DataSource<T = Source> = {
    records: Array<T>;
    current: number;
    size: number;
    total: number;
};

/**
 * @description single colunms
 */
export type ColumnsItem<T = any> = TableColumnProps<T>;

/**
 * @description Table List Columns Props
 */
export type GroupColumns<T = any> = Array<ColumnsItem<T>>;

/**
 * @description Table Search Header
 */
export type Header = { Search?: SearchTypes; SearchButton?: SearchButtonTypes };

/**
 * @description Table Operation
 */
export type Operation = Array<RenderNode>;

/**
 * @description Table Props;
 * @readonly
 * @type    {TableProps<any>}    tableProps antd Table API
 * @type    {<R extends SysResponse<DataSource>, Q = any>(params: Q) => Promise<R>} query API
 * @type    {?Header}    header
 * @type    {?Record<string, unknown>}    otherParams
 * @type    {?Operation}    operation
 * @type    {?WrapperTypes}    wrapper
 * @type    {?Array<string>}    refresh Table Refesh Params
 * @type    {?NotFuzzy}    notFuzzy fuzzy params
 */
export interface TableListProps {
    readonly tableProps: TableProps<any>;
    readonly query: <R extends SysResponse<DataSource>, Q = any>(
        params: Q,
    ) => Promise<R>;
    readonly header?: Header;
    readonly otherParams?: Record<string, unknown>;
    readonly operation?: Operation;
    readonly wrapper?: WrapperTypes;
    readonly refresh?: Array<string>;
    readonly notFuzzy?: NotFuzzy;
}

/**
 * @description Table State
 * @type    {Array<T>}  dataSource
 * @type    {TablePaginationConfig}  tablePage
 * @type    {boolean}  loading  table loading
 */
export interface TableListState<T = Source> {
    dataSource: Array<T>;
    tablePage: TablePaginationConfig;
    loading: boolean;
}

/**
 * @description Table Page
 */
export type TablePage = TablePaginationConfig & {};

/**
 * @description Table Header Props
 * @readonly
 * @type    {Header | void}  tablePage
 * @type    {<T = any>(params?: T) => void}  queryTableList query API
 * @type    {NotFuzzy}  notFuzzy fuzzy params
 * @type    {TablePage}  tablePage table page config
 */
export interface TableHeaderProps {
    readonly header: Header | void;
    readonly queryTableList: <T = any>(params?: T) => void;
    readonly notFuzzy: NotFuzzy;
    readonly tablePage: TablePage;
}

/**
 * @description Table Header State
 * @type    {SearchTypes}   formList query table params controller
 * @type    {SearchButtonTypes} queryBtn  query table button
 */
export interface TableHeaderState {
    formList: SearchTypes;
    queryBtn: SearchButtonTypes;
}

/**
 * @description TableOperationProps
 * @readonly
 * @type    {Operation | void}  operation   button
 */
export interface TableOperationProps {
    readonly operation: Operation | void;
}
