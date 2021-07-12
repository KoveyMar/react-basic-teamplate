import { ComponentClass, FC, ReactNode } from 'react';
import { TableProps, TableColumnProps } from 'antd';
import { FormListProps, WrapperTypes } from './form';

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
export type Operation = Array<
    ReactNode | FC | ComponentClass | JSX.IntrinsicElements | JSX.Element
>;

/**
 * @description Table Props;
 */
export interface TableListProps {
    tabelProps: TableProps<any>;
    query: Function;
    header?: Header;
    otherParams?: any;
    opeartion?: Operation;
    wrapper?: WrapperTypes;
}
