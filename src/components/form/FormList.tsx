import React, { Component } from 'react';
import { Form } from 'antd';
import { FormItemTypes, RenderFace, FormListProps } from '@/types/form';
import ChildContext from '@/context/ChildContext';
import FormInput from './comp/Input';
import FormInPassword from './comp/InPassword';
import FormSelect from './comp/Select';
import FormRadio from './comp/Radio';
import FormRangeDate from './comp/RangePicker';
import FormDate from './comp/DatePicker';
import FormSwitch from './comp/Switch';
import FormCheckbox from './comp/Checkbox';

interface Props {
    formList: FormListProps;
}

interface State {}

interface ItemProps extends FormItemTypes {}

const FormItem = Form.Item;

const FormRender: RenderFace = {
    Input: FormInput,
    InPassword: FormInPassword,
    Select: FormSelect,
    Radio: FormRadio,
    Date: FormDate,
    Range: FormRangeDate,
    Switch: FormSwitch,
    Checkbox: FormCheckbox,
};

/**
 * @description create Form Item
 */
class FormCol extends Component<ItemProps> {
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
        const { formList } = this.props;
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
