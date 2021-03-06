import { ReactNode } from 'react';
import { TableProps, TableColumnProps, TablePaginationConfig } from 'antd';
import { FormListProps, WrapperTypes } from './form';
import { RenderNode } from './schemes';

/**
 * @description Table Search Params
 */
export type SearchTypes = FormListProps;

/**
 * @description Table Search new button
 */
export type BtnTypes = ReactNode;

/**
 * @description Table   DataSource
 */
export type DataSource = {
    records: Array<any>;
    current: number;
    size: number;
    total: number;
};

/**
 * @description Table List Columns Props
 */
export type GroupColumns = Array<TableColumnProps<any>>;

/**
 * @description Table Search Header
 */
export type Header = { Search?: SearchTypes; Btn?: BtnTypes };

/**
 * @description Table Operation
 */
export type Operation = Array<RenderNode>;

/**
 * @description Table Props;
 */
export interface TableListProps {
    tabelProps: TableProps<any>;
    query: (params: any) => Promise<any>;
    header?: Header;
    otherParams?: any;
    operation?: Operation;
    wrapper?: WrapperTypes;
    fuzzy?: Array<string>;
}

/**
 * @description Table State
 */
export interface TableListState {
    dataSource: Array<any>;
    tablePage: TablePaginationConfig;
}

/**
 * @description Table Pages Props
 */
export type TableListPagesProps = TablePaginationConfig;
