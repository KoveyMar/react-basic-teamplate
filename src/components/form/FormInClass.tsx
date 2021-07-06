import { Component } from 'react';
import { Button, Form } from 'antd';
import { FormProps } from '@/types/form';
import { formItemLayout, tailLayout } from './style';
import List from './FormList';

interface State {
    btnLoading: boolean;
}

const FormItem = Form.Item;

class FormList extends Component<FormProps, State> {
    public state: State = {
        btnLoading: !1,
    };

    private onSubmit(): void {
        const { onSubmit, formRef } = this.props;
        formRef
            .current!.validateFields()
            .then((values: any) => {
                this.setState({
                    btnLoading: !0,
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
        const { btnLoading } = this.state;
        return (
            <Form ref={formRef} {...formItemLayout}>
                <List formList={formList} />
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

export default FormList;
