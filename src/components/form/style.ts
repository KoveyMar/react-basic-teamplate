import { FormItemCol } from '@/types/form';

/**
 * @template   --FormItem global Col Config, formItemLayout and tailLayout
 */
export const formItemLayout: FormItemCol = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

/**
 * @description --empty label, only FormItem
 */
export const tailLayout: FormItemCol = {
    wrapperCol: { offset: 6, span: 16 },
};
