import { createElement, Component } from 'react';
import { Form } from 'antd';
import type { ControllerItem, FormItemRefProps } from '@/types';
import {
    FormInput,
    FormInPassword,
    FormSelect,
    FormRadio,
    FormRangeDate,
    FormDate,
    FormSwitch,
    FormCheckbox,
    FormUpload,
    FormTextArea,
    FormTreeSelect,
    FormInNumber,
    FormInGroup,
} from './comp';

const FormItem = Form.Item;

const FormRender: ControllerItem = {
    Checkbox: FormCheckbox,
    Date: FormDate,
    InGroup: FormInGroup,
    InNumber: FormInNumber,
    InPassword: FormInPassword,
    Input: FormInput,
    Radio: FormRadio,
    Range: FormRangeDate,
    Select: FormSelect,
    Switch: FormSwitch,
    TextArea: FormTextArea,
    TreeSelect: FormTreeSelect,
    Upload: FormUpload,
};

/**
 * @class   表单单个组件包装器
 * @description create Form Item
 * @returns {Component}
 */
export default class FormCol extends Component<FormItemRefProps> {
    constructor(props: FormItemRefProps) {
        super(props);
    }

    public render(): JSX.Element {
        const {
            component: fr_key,
            inChild,
            NodeProps,
            LabelProps,
            ...ILable
        } = this.props;
        return (
            <>
                <FormItem {...LabelProps} {...ILable}>
                    {createElement(FormRender[fr_key], NodeProps, inChild)}
                </FormItem>
            </>
        );
    }
}
