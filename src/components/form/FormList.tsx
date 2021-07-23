import React, { Component } from 'react';
import { Form } from 'antd';
import { FormItemTypes, RenderFace, FormRefObject } from '@/types';
import ChildContext from '@/context/ChildContext';
import FormInput from './comp/Input';
import FormInPassword from './comp/InPassword';
import FormSelect from './comp/Select';
import FormRadio from './comp/Radio';
import FormRangeDate from './comp/RangePicker';
import FormDate from './comp/DatePicker';
import FormSwitch from './comp/Switch';
import FormCheckbox from './comp/Checkbox';
import FormUpload from './comp/Upload';
import FormTextArea from './comp/TextArea';

interface Props extends FormRefObject {}

interface State {}

interface ItemProps extends FormItemTypes {}

const FormItem = Form.Item;

export const FormRender: RenderFace = {
    Input: FormInput,
    InPassword: FormInPassword,
    Select: FormSelect,
    Radio: FormRadio,
    Date: FormDate,
    Range: FormRangeDate,
    Switch: FormSwitch,
    Checkbox: FormCheckbox,
    Upload: FormUpload,
    TextArea: FormTextArea,
};

/**
 * @description create Form Item
 */
export class FormCol extends Component<ItemProps> {
    public render(): JSX.Element {
        const {
            component: fr_key,
            inChild,
            NodeProps,
            LabelProps,
        } = this.props;
        return (
            <FormItem {...LabelProps}>
                {React.createElement(FormRender[fr_key], NodeProps, inChild)}
            </FormItem>
        );
    }
}

/**
 * @template    FormList
 * @description form list basic
 */
class FormList extends Component<Props, State> {
    static contextType = ChildContext;

    public state: State = {};

    public render(): JSX.Element {
        const { formList, formValues } = this.props;
        const wrapper = this.context;
        return (
            <>
                {formList.map((item: FormItemTypes, index: number) => {
                    return wrapper ? (
                        React.createElement(
                            wrapper.element,
                            {
                                key: index,
                                ...wrapper.props,
                            },
                            <FormCol {...item} />,
                        )
                    ) : (
                        <FormCol key={index} {...item} />
                    );
                })}
            </>
        );
    }
}

export type FormListFace = typeof FormList;

export default FormList;
