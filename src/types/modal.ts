import { ModalProps } from 'antd';
import { MouseClick, RenderNode } from '@/types';

interface ModalIndexProps extends ModalProps {
    onOk?: (cb: Function | MouseClick) => void;
}

/**
 * @description Modal Props
 */
export interface ModalIProps {
    init?: Function | void;
    title?: string;
    btn?: any;
    children: RenderNode;
    modalProps: ModalIndexProps;
}

/**
 * @description Modal State
 */
export interface ModalIState {
    visible: boolean;
}
