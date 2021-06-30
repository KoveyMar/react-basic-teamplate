import { ReactNode } from 'react';
import { FormItemProps, ColProps } from 'antd';
import { InputFace, Props as InputProps } from '@/components/form/input';
import {
    InPasswordFace,
    Props as InPasswordProps,
} from '@/components/form/inputPassword';
import { SelectFace, Props as SelectProps } from '@/components/form/select';
import { RadioFace, Props as RadioProps } from '@/components/form/radio';

/**
 * @description render Controller types
 */
export type ControllerFace =
    | InputFace
    | InPasswordFace
    | SelectFace
    | RadioFace;

/**
 * @description Controller Props types
 */
export type ControllerTypes =
    | InputProps
    | InPasswordProps
    | SelectProps
    | RadioProps;

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
