import React, { Component, FC, ComponentClass, ReactNode } from 'react';
import { ModalProps, Modal } from 'antd';

interface ModalIndexProps extends ModalProps {
    onOk?: (cb: Function | React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

interface Props {
    init?: Function | void;
    title?: string;
    children: FC | ComponentClass | ReactNode;
    btn?: any;
    modalProps: ModalIndexProps;
}

interface State {
    visible: boolean;
}

class BasicModal extends Component<Props, State> {
    public state: State = {
        visible: !1,
    };

    /**
     * @name    setVisible
     * @description modal visible
     * @date 2021-07-01
     * @param {any} visible:boolean
     * @returns {any}
     */
    private setVisible(visible: boolean): void {
        this.setState(
            {
                visible,
            },
            () => {
                visible && this.props.init && this.props.init();
            },
        );
    }

    /**
     * @name    onOpen
     * @description open modal
     * @date 2021-07-01
     * @param {any} e:React.MouseEvent<HTMLElement>
     * @returns {any}
     */
    private onOpen(e: React.MouseEvent<HTMLElement>): void {
        e.preventDefault();
        const { onOk } = this.props.modalProps;
        onOk && onOk(() => this.setVisible(!1));
    }

    /**
     * @name    onClose
     * @description close modal
     * @date 2021-07-01
     * @param {any} e:React.MouseEvent<HTMLElement>
     * @returns {any}
     */
    private onClose(e: React.MouseEvent<HTMLElement>): void {
        const { onCancel } = this.props.modalProps;
        onCancel && onCancel(e);
        this.setVisible(!1);
    }

    /**
     * @name    onBtnClick
     * @description btn onClick
     * @date 2021-07-01
     * @returns {any}
     */
    private async onBtnClick(e: React.MouseEvent<HTMLElement>): Promise<void> {
        e.stopPropagation();
        const {
            btn: { onClick },
        } = this.props;
        if (onClick) {
            await onClick();
        }
        this.setVisible(!0);
    }

    public render(): JSX.Element {
        const { visible } = this.state;
        const { modalProps, children, btn } = this.props;
        return (
            <>
                {btn ? (
                    <span
                        onClick={() =>
                            btn.props.disabled ? void 0 : this.onBtnClick
                        }
                    >
                        {btn}
                    </span>
                ) : null}
                <Modal
                    visible={visible}
                    maskClosable={!1}
                    onOk={() => this.onOpen}
                    onCancel={() => this.onClose}
                    {...modalProps}
                >
                    {children}
                </Modal>
            </>
        );
    }
}

export default BasicModal;
