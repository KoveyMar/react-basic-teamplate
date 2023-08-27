import { useState } from 'react';
import { Form, Spin } from 'antd';
import BasicModal from '@/components/modal';
import { AppForm, FormList } from '@/components/form';
import type { RenderNode, FormListProps, ModalCallBack } from '@/types';
import { useFormRef } from '@/hooks/useFormRef';

interface Props {
    readonly title?: string;
    readonly children?: RenderNode;
    readonly record?: any;
    readonly refresh: Function;
}

interface State {}

export default function Modal(props: Props): JSX.Element {
    const { title, children, refresh, record } = props;
    const RefForm = useFormRef<typeof record>();
    const { setFieldsValue, resetFields } = RefForm;

    const formList: FormListProps = [];

    /**
     * @description 提交
     * @date 2021-08-10
     * @param {ModalCallBack} callback
     * @returns {void}
     */
    function onSubmit(callback: ModalCallBack): void {
        const [setClose, setLoading] = callback;
        RefForm.validateFields().then((jsonValue: any) => {
            setLoading(!0);
        });
    }

    /**
     * @description 弹窗
     * @date 2021-08-27
     * @returns {any}
     */
    function init(): any {
        resetFields();
    }

    return (
        <BasicModal
            btn={children}
            init={init}
            modalProps={{
                title: title ?? '新增数据',
                onOk: onSubmit,
            }}
        >
            <AppForm formInstance={RefForm} formList={formList} />
        </BasicModal>
    );
}
