import { Component } from 'react';
import { Modal, Button } from 'antd';
import type {
    ModalIProps as Props,
    ModalIState as State,
    MouseClick,
} from '@/types';

export default class BasicModal extends Component<Props, State> {
    public state: State = {
        visible: !1,
        confirmLoading: !1,
    };

    /**
     * @name    setVisible
     * @description modal visible
     * @date 2021-07-01
     * @param {boolean} visible
     * @param {Function} callBack
     * @returns {void}
     */
    private setVisible(visible: boolean, callBack?: Function): void {
        this.setState(
            {
                visible,
            },
            () => {
                visible && this.props.init && this.props.init();
                callBack && callBack();
            },
        );
    }

    /**
     * @name    setConfirmLoading
     * @description modal btn loading
     * @date 2021-08-10
     * @param {boolean} confirmLoading
     * @returns {void}
     */
    private setConfirmLoading(confirmLoading: boolean): void {
        this.setState({
            confirmLoading,
        });
    }

    /**
     * @name    initModalController
     * @description modal controller
     * @date 2022-09-22
     * @returns {void}
     */
    private initModalController(): void {
        const { initController } = this.props;
        if (initController) {
            initController({
                setClose: (close: boolean) => this.setVisible(close),
                setLoading: (loading: boolean) =>
                    this.setConfirmLoading(loading),
            });
        }
    }

    /**
     * @name    onSubmit
     * @description open modal
     * @date 2021-07-01
     * @param {MouseClick} e
     * @returns {void}
     */
    private onSubmit(e: MouseClick): void {
        e.preventDefault();
        const { onOk } = this.props.modalProps;
        onOk &&
            onOk(
                [
                    (close: boolean) => this.setVisible(close),
                    (loading: boolean) => this.setConfirmLoading(loading),
                ],
                e,
            );
    }

    /**
     * @name    onClose
     * @description close modal
     * @date 2021-07-01
     * @param {MouseClick} e
     * @returns {void}
     */
    private onClose(e: MouseClick): void {
        e.preventDefault();
        const { onCancel } = this.props.modalProps;
        onCancel && onCancel(e);
        this.setVisible(!1);
    }

    /**
     * @name    onBtnClick
     * @function AsyncFunction
     * @description btn onClick
     * @date 2021-07-01
     * @param {MouseClick} e
     * @returns {Promise<void>}
     */
    private async onBtnClick(e: MouseClick): Promise<void> {
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

    public componentDidMount(): void {
        this.initModalController();
    }

    public render(): JSX.Element {
        const { visible, confirmLoading } = this.state;
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
                    okText="确认"
                    cancelText="取消"
                    maskClosable={!1}
                    width={600}
                    {...modalProps}
                    open={visible}
                    onOk={(e) => this.onSubmit(e)}
                    onCancel={(e) => this.onClose(e)}
                    confirmLoading={confirmLoading}
                    children={children}
                />
            </>
        );
    }
}
