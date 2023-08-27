import type { ModalProps } from 'antd';
import type { Dispatch } from 'react';
import type { MouseClick, RenderNode } from '..';

/**
 * @description Modal controll CallBack
 * @param   {Dispatch}  setClose    Modal visible
 * @param   {Dispatch}  setLoading  Modal confirmLoading, just ModalProps of Antd;
 */
type ScopeLoading = {
    readonly setClose: (close: boolean) => void;
    readonly setLoading: (loading: boolean) => void;
};

/**
 * @description ModalIndexProps onOk Submit Callback
 */
export type ModalCallBack = [
    ScopeLoading['setClose'],
    ScopeLoading['setLoading'],
];

/**
 * @description Modal Button Handle
 */
export type ModalControl = (
    modalHandle: ModalCallBack,
    event: MouseClick,
) => void;

/**
 * @description setClose By Control
 */
export type ModalOpenHandle = Pick<ScopeLoading, 'setClose'>;

/**
 * @description Modal Config Props, ModalProps's Property onOk toString()
 * @date 2021-08-09
 * @param {ModalCallBack} modalHandle callback [setClose, setLoading]
 * @param {MouseClick} event
 * @returns {any}
 */
export interface ModalIndexProps extends Omit<ModalProps, 'onOk'> {
    onOk?: ModalControl;
}

/**
 * @description Modal Props
 * @param {ModalIndexProps} modalProps antd Component modal properties
 * @param {Function | void} init  Modal Open Callback
 * @param {RenderNode} children Modal children
 * @param {RenderNode} btn   Modal click
 * @param {Dispatch} initController   Modal CallBack, create state, and state is ScopeLoading
 */
export interface ModalIProps<T = RenderNode> {
    readonly modalProps: ModalIndexProps;
    readonly init?: Function | void;
    readonly children?: T;
    readonly btn?: T;
    readonly initController?: Dispatch<ScopeLoading>;
}

/**
 * @description Modal State
 * @param   {boolean} visible   modal visible
 * @param   {boolean} confirmLoading    modal confirmLoading
 */
export interface ModalIState {
    visible: boolean;
    confirmLoading: boolean;
}
