import { ComponentClass, FC, ReactNode } from 'react';
import { ConnectedComponent } from 'react-redux';
import { Action } from '@/.umi/plugin-dva/connect';

/**
 * @description xhr response Data Type
 */
export interface SysResponse<P = any> {
    code: number;
    success?: boolean;
    // data: P;
    result: P;
    message: string;
}

/**
 * @description 解决 TS 中 Action 提交类dispacth数据对象,但不能识别 payload 等 dispacth 参数
 */
export interface ActPayLoad<T, P = any> extends Action<T> {
    payload?: P;
}

/**
 * @description React DragEvent
 */
export type MouseDrag = React.DragEvent<HTMLDivElement>;

/**
 * @description React MouseEvent
 */
export type MouseClick = React.MouseEvent<HTMLElement, MouseEvent>;

/**
 * @description React Element synthetical Attribute
 */
export type RenderNode<P = {}, S = any> =
    | FC<P>
    | ComponentClass<P, S>
    | ReactNode
    | JSX.IntrinsicElements
    | JSX.Element;
