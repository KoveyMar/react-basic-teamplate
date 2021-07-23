import { Component } from 'react';
import { Button, Form } from 'antd';
import { FormComponentProps, FormComponentState as State } from '@/types/form';
import { formItemLayout, tailLayout } from './style';
import FormList from './FormList';

const FormItem = Form.Item;

class FormClass extends Component<FormComponentProps, State> {
    public state: State = {
        btnLoading: !1,
        formValues: {},
    };

    private onSubmit(): void {
        const { onSubmit, formRef } = this.props;
        formRef
            .current!.validateFields()
            .then((values: any) => {
                this.setState({
                    btnLoading: !0,
                    formValues: values,
                });
                if (values) {
                    onSubmit && onSubmit(values);
                }
            })
            .catch((err: any) => {
                // console.error(err);
            })
            .finally(() => {
                this.setState({
                    btnLoading: !1,
                });
            });
    }

    public render(): JSX.Element {
        const { formList, formRef, btn } = this.props;
        const { btnLoading, formValues } = this.state;
        return (
            <Form ref={formRef} {...formItemLayout}>
                <FormList
                    formList={formList}
                    formRef={formRef}
                    formValues={formValues}
                />

                <FormItem {...tailLayout}>
                    <Button
                        type="primary"
                        loading={btnLoading}
                        onClick={() => this.onSubmit()}
                    >
                        Submit
                    </Button>
                </FormItem>
                {btn}
            </Form>
        );
    }
}

export default FormClass;
