import { useState } from 'react';
import { Button, Form } from 'antd';
import { FormProps } from '@/types/form';
import { formItemLayout, tailLayout } from './style';
import List from './FormList';

interface State {
    btnLoading: boolean;
}

export default (props: FormProps, state: State): JSX.Element => {
    const { formList, btn } = props;
    const FormItem = Form.Item;

    const [btnLoading, setBtnLoading] = useState<boolean>(!1);
    const [formRef] = Form.useForm();

    const onSubmit = (): void => {
        const { onSubmit } = props;
        formRef
            .validateFields()
            .then((values: any) => {
                setBtnLoading(!0);
                if (values) {
                    onSubmit && onSubmit(values);
                }
            })
            .catch((err: any) => {
                // console.error(err);
            })
            .finally(() => {
                setBtnLoading(!1);
            });
    };

    return (
        <Form form={formRef} {...formItemLayout}>
            <List formList={formList} />
            <FormItem {...tailLayout}>
                <Button type="primary" loading={btnLoading} onClick={onSubmit}>
                    Submit
                </Button>
            </FormItem>
            {btn}
        </Form>
    );
};
