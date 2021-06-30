import React, { Component, ReactNode, FC, ComponentClass } from 'react';
import { ModalProps, Modal } from 'antd';

interface ModalIndexProps extends ModalProps {
    onOk?: (cb: Function | React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface Props {
    init?: Function | void;
    title?: string;
    btn?: FC | ComponentClass<any, any>;
    children: ReactNode | FC | ComponentClass<any, any>;
    modalProps: ModalIndexProps;
}

interface State {
    visible: boolean;
}

class BasicModal extends Component<Props, State> {
    public state: State = {
        visible: !1,
    };

    private setVisible(visible: boolean): void {
        this.setState({
            visible,
        });
        if (visible && this.props.init) {
            this.props.init();
        }
    }

    private onOpen(e: React.MouseEvent<HTMLElement>): void {
        e.preventDefault();
        const { onOk } = this.props.modalProps;
        if (onOk) {
            onOk(() => this.setVisible(!1));
        }
    }

    private onClose(e: React.MouseEvent<HTMLElement>): void {
        const { onCancel } = this.props.modalProps;
        if (onCancel) {
            onCancel(e);
        }
        this.setVisible(!1);
    }

    public render(): JSX.Element {
        const { visible } = this.state;
        const { modalProps, children } = this.props;
        return (
            <Modal
                visible={visible}
                maskClosable={!1}
                onOk={this.onOpen}
                onCancel={this.onClose}
                {...modalProps}
            >
                {children}
            </Modal>
        );
    }
}

export default BasicModal;
