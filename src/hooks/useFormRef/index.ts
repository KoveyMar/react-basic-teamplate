import { useRef } from 'react';
import { Form } from 'antd';
import type { AppFormInstance } from '@/types';

/**
 * @example Hooks
 * @description 创建FC 组件表单ref
 * @param   {?AppFormInstance}  formInstance 表单实例,作为传入的返回值
 * @type    {Values}    当前表单实例的值
 * @returns {AppFormInstance}
 */
export function useFormRef<Values = any>(
    formInstance?: AppFormInstance<Values>,
): AppFormInstance<Values> {
    return useRef<AppFormInstance<Values>>(
        Form.useForm<Values>(formInstance)[0],
    ).current;
}

/**
 * @example Hooks
 * @description 从context获取父级表单实例
 * @type    {Values}    当前表单实例的值
 * @returns {AppFormInstance}
 */
export function useContextForm<Values = any>(): AppFormInstance<Values> {
    return Form.useFormInstance<Values>();
}
