import { ReactNode, RefObject } from 'react';
import { FormItemProps, ColProps, FormInstance } from 'antd';
import { InputFace, Props as InputProps } from '@/components/form/comp/Input';
import {
    InPasswordFace,
    Props as InPasswordProps,
} from '@/components/form/comp/InPassword';
import {
    SelectFace,
    Props as SelectProps,
} from '@/components/form/comp/Select';
import { RadioFace, Props as RadioProps } from '@/components/form/comp/Radio';
import {
    DateRangeFace,
    Props as RangeProps,
} from '@/components/form/comp/RangePicker';
import {
    DateFace,
    Props as DateProps,
} from '@/components/form/comp/DatePicker';
import {
    SwitchFace,
    Props as SwitchProps,
} from '@/components/form/comp/Switch';
import {
    CheckboxFace,
    Props as CheckboxProps,
} from '@/components/form/comp/Checkbox';

/**
 * @description render Controller types
 */
export type ControllerFace =
    | InputFace
    | InPasswordFace
    | SelectFace
    | RadioFace
    | DateFace
    | DateRangeFace
    | SwitchFace
    | CheckboxFace;

/**
 * @description Controller Props types
 */
export type ControllerTypes =
    | InputProps
    | InPasswordProps
    | SelectProps
    | RadioProps
    | DateProps
    | RangeProps
    | SwitchProps
    | CheckboxProps;

/**
 * @description FormItemTypes
 * @param   LabelProps  FormItem Props
 * @param   NodeProps  FormController Props
 * @param   component   FormController  Key In FormRender
 * @param   inChild FormController  children
 */
export interface FormItemTypes<T = ControllerTypes> {
    LabelProps: FormItemProps;
    component: string;
    NodeProps?: T;
    inChild?: ReactNode;
}

/**
 * @description render data list
 */
export type RenderFace<T = ControllerFace> = {
    [types: string]: T;
};

/**
 * @description antd FormItem Col
 */
export interface FormItemCol {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
}

/**
 * @description Radio and Select Options types
 */
export interface OptionItem {
    label: string;
    value: string;
}

/**
 * @description form component props
 */
export interface FormProps {
    formList: Array<FormItemTypes>;
    formRef: RefObject<FormInstance>;
    btn?: ReactNode;
    onSubmit?: Function;
}
