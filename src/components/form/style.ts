// import { Col } from 'antd';
import type { FormItemCol, WrapperTypes } from '@/types';

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

/**
 * @default
 * @description formList Grid
 */
// export const IWrapper: WrapperTypes = {
//     labelCol: {
//         // sm: 24,
//         // md: 24,
//         span: 24,
//     },
// };
