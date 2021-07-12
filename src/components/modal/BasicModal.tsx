import React, { Component, FC, ComponentClass, ReactNode } from 'react';
import { ModalProps, Modal, Button } from 'antd';

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
     * @name    onSubmit
     * @description open modal
     * @date 2021-07-01
     * @param {any} e:React.MouseEvent<HTMLElement>
     * @returns {any}
     */
    private onSubmit(e: React.MouseEvent<HTMLElement>): void {
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
        e.preventDefault();
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
    private async onBtnClick(
        e?: React.MouseEvent<HTMLElement> | any,
    ): Promise<void> {
        e.stopPropagation();
        e.preventDefault();
        const {
            btn: {
                props: { onClick, disabled },
            },
        } = this.props;
        if (disabled) return;
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
                    <Button
                        {...btn.props}
                        onClick={(e) => this.onBtnClick(e)}
                    />
                ) : null}
                <Modal
                    maskClosable={!1}
                    {...modalProps}
                    visible={visible}
                    onOk={(e) => this.onSubmit(e)}
                    onCancel={(e) => this.onClose(e)}
                >
                    {children}
                </Modal>
            </>
        );
    }
}

export default BasicModal;
