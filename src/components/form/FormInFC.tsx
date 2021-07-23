import { useState } from 'react';
import { Button, Form, FormInstance } from 'antd';
import { FormComponentProps, FormComponentState } from '@/types/form';
import { formItemLayout, tailLayout } from './style';
import FormList from './FormList';

const FormItem = Form.Item;

export default (
    props: FormComponentProps,
    state: FormComponentState,
): JSX.Element => {
    const { formList, btn } = props;

    const [btnLoading, setBtnLoading] = useState<boolean>(!1);
    const [formValues, setFormValues] = useState<any>({});
    const [formRef]: [FormInstance<FormInstance<any>>] = Form.useForm();

    const onSubmitHandle = (): void => {
        const { onSubmit } = props;
        formRef
            .validateFields()
            .then((values: any) => {
                setBtnLoading(!0);
                setFormValues(values);
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
            <FormList
                formList={formList}
                formRef={formRef}
                formValues={formValues}
            />

            <FormItem {...tailLayout}>
                <Button
                    type="primary"
                    loading={btnLoading}
                    onClick={() => onSubmitHandle()}
                >
                    Submit
                </Button>
            </FormItem>
            {btn}
        </Form>
    );
};
