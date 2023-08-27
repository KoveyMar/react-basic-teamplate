import type { ComponentClass, FC, ReactElement, ReactNode } from 'react';
import type { Action } from '@/.umi/plugin-dva/connect';

/**
 * @description 解决 TS 中 Action 提交类dispacth数据对象,但不能识别 payload 等 dispacth 参数
 */
export interface ActPayLoad<T, P = any> extends Action<T> {
    payload?: P;
}

/**
 * @description useReducer function
 */
export type DispatchAction<T = any, P = any> = ActPayLoad<T, P>;

/**
 * @description React DragEvent
 */
export type MouseDrag = React.DragEvent<HTMLElement>;

/**
 * @description React ClickEvent
 */
export type MouseClick = React.MouseEvent<HTMLElement, MouseEvent>;

/**
 * @description React ChangeEvent
 */
export type MouseChange = React.ChangeEvent<HTMLElement>;

/**
 * @description React Element synthetical Attribute
 */
export type RenderNode = ReactNode | any;

/**
 * @description Tree Stack Props
 */
export interface ITreeProps {
    key: string;
    title: string;
    value: string;
    children?: ITreeProps[];
}
