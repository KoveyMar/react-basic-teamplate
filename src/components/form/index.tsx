import React, { Component } from 'react';
import { Form } from 'antd';
import { FormItemTypes, RenderFace } from '@/types/form';
import FormInput from './input';
import FormInPassword from './inputPassword';
import FormSelect from './select';
import FormRadio from './radio';

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

export default FormList;
