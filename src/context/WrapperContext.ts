import { createContext } from 'react';
import type { WrapperTypes } from '@/types';
import { formItemLayout } from '@/components/form/style';

/**
 * @description 用于设置表单单个控件的单个布局样式
 * @date 2021-05-28
 */
const WrapperContext = createContext<WrapperTypes>(formItemLayout);

export default WrapperContext;
