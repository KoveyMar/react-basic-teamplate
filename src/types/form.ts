import { ReactNode, RefObject } from 'react';
import { FormItemProps, ColProps, FormInstance } from 'antd';
import { RenderNode } from './schemes';
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
import {
    UploadFace,
    Props as UploadProps,
} from '@/components/form/comp/Upload';
import {
    TextAreaFace,
    Props as TextAreaProps,
} from '@/components/form/comp/TextArea';

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
    | CheckboxFace
    | UploadFace
    | TextAreaFace;

/**
 * @description Controller Props types
 */
export type ControllerProps =
    | InputProps
    | InPasswordProps
    | SelectProps
    | RadioProps
    | DateProps
    | RangeProps
    | SwitchProps
    | CheckboxProps
    | UploadProps
    | TextAreaProps;

/**
 * @description form item props
 */
export interface FormSingleProps<T = ControllerProps> {
    LabelProps?: FormItemProps;
    NodeProps?: T;
}

/**
 * @description FormItemTypes
 * @param   LabelProps  FormItem Props
 * @param   NodeProps  FormController Props
 * @param   component   FormController  Key In FormRender
 * @param   inChild FormController  children
 */
export interface FormItemTypes extends FormSingleProps {
    component: string;
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
 * @description formList type
 */
export type FormListProps<T = any> = Array<FormItemTypes | T>;

/**
 * @description WrapperTypes
 */
export type WrapperTypes = {
    element: RenderNode;
    props: any;
};

/**
 * @description Form Ref Object
 */
export type FormRef =
    | RefObject<FormInstance>
    | FormInstance<FormInstance<any>>
    | any;

/**
 * @description form Submit Function CallBack & Params;
 */
export type FormRefObject = {
    formList: FormListProps;
    formValues?: any;
    formRef?: FormRef;
};

/**
 * @description form component props
 */
export interface FormComponentProps extends FormRefObject {
    btn?: ReactNode;
    onSubmit?: Function;
    wrapper?: WrapperTypes;
}

/**
 * @description FormFC / FormClasss State In Component
 */
export interface FormComponentState {
    btnLoading?: boolean;
    formValues?: any;
}
