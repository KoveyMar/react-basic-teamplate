import React, { Component } from 'react';
import { Form } from 'antd';
import { FormItemTypes, RenderFace } from '@/types/form';
import FormInput from './comp/Input';
import FormInPassword from './comp/InPassword';
import FormSelect from './comp/Select';
import FormRadio from './comp/Radio';
import FormRangeDate from './comp/RangePicker';
import FormDate from './comp/DatePicker';
import FormSwitch from './comp/Switch';
import FormCheckbox from './comp/Checkbox';

interface Props {
    formList: Array<FormItemTypes>;
}

interface State {}

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

class FormList extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        const { formList } = this.props;
        return (
            <>
                {formList.map((item: FormItemTypes, index: number) => {
                    const {
                        component: fr_key,
                        inChild,
                        NodeProps,
                        LabelProps,
                    } = item;
                    return (
                        <FormItem key={index} {...LabelProps}>
                            {React.createElement(
                                FormRender[fr_key],
                                NodeProps,
                                inChild,
                            )}
                        </FormItem>
                    );
                })}
            </>
        );
    }
}

export type FormListFace = typeof FormList;

export default FormList;
