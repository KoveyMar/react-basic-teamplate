import { memo } from 'react';
import { Form, Spin } from 'antd';
import type {
    FormComponentProps as Props,
    // FormComponentState as State,
} from '@/types';
import { getStrId } from '@/utils';
import { formItemLayout, tailLayout } from './style';
import AppFormList from './AppFormList';

const FormItem = Form.Item;

/**
 * @description 创建表单组件
 * @param {Props} props
 * @returns {JSX.Element}
 */
/**
 * @template
 * import { useFormRef } from '@/hooks/useFormRef';
 * 引用 Hooks useFormRef,返回一个refs对象
 */
function AppForm(props: Props): JSX.Element {
    const {
        button,
        formList,
        spinning,
        formProps,
        formInstance,
        dynamicFormList,
    } = props;

    return (
        <Spin spinning={Boolean(spinning)}>
            <Form form={formInstance} {...formProps} {...formItemLayout}>
                {/**
                 * @prop    {formList}
                 * 加载同步表单组件
                 */}
                <AppFormList formList={formList} />
                {
                    /**
                     * @prop    {dynamicFormList}
                     * 加载异步表单组件
                     */
                    dynamicFormList?.map((fl) => (
                        <AppFormList key={getStrId()} formList={fl} />
                    ))
                }
                {
                    /**
                     * @prop   {button}
                     * 表单按钮
                     */
                    button?.map((btn, _i) => (
                        <FormItem key={_i} {...tailLayout} children={btn} />
                    ))
                }
            </Form>
        </Spin>
    );
}

export default memo(AppForm);
