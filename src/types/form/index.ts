import type { ReactNode } from 'react';
import type { FormItemProps, ColProps, FormProps, FormInstance } from 'antd';
import type { RenderNode } from '..';
import type {
    InputFace,
    Props as InputProps,
} from '@/components/form/comp/Input';
import type {
    InPasswordFace,
    Props as InPasswordProps,
} from '@/components/form/comp/InPassword';
import type {
    SelectFace,
    Props as SelectProps,
} from '@/components/form/comp/Select';
import type {
    RadioFace,
    Props as RadioProps,
} from '@/components/form/comp/Radio';
import type {
    DateRangeFace,
    Props as RangeProps,
} from '@/components/form/comp/RangePicker';
import type {
    DateFace,
    Props as DateProps,
} from '@/components/form/comp/DatePicker';
import type {
    SwitchFace,
    Props as SwitchProps,
} from '@/components/form/comp/Switch';
import type {
    CheckboxFace,
    Props as CheckboxProps,
} from '@/components/form/comp/Checkbox';
import type {
    UploadFace,
    Props as UploadProps,
} from '@/components/form/comp/Upload';
import type {
    TextAreaFace,
    Props as TextAreaProps,
} from '@/components/form/comp/TextArea';
import type {
    TreeSelectFace,
    Props as TreeSelectProps,
} from '@/components/form/comp/TreeSelect';
import type {
    InNumberFace,
    Props as InputNumberProps,
} from '@/components/form/comp/InNumber';
import type {
    InGroupFace,
    Props as InoutGroupFaceProps,
} from '@/components/form/comp/InGroup';

/**
 * @exports
 * @description Form Components Name
 */
export type ComponentsName =
    | 'Checkbox'
    | 'Date'
    | 'InGroup'
    | 'InNumber'
    | 'InPassword'
    | 'Input'
    | 'Radio'
    | 'Range'
    | 'Select'
    | 'Switch'
    | 'TextArea'
    | 'TreeSelect'
    | 'Upload';

/**
 * @exports
 * @description render Controller types
 */
export type ControllerTypes =
    | InputFace
    | InPasswordFace
    | SelectFace
    | RadioFace
    | DateFace
    | DateRangeFace
    | SwitchFace
    | CheckboxFace
    | UploadFace
    | TextAreaFace
    | TreeSelectFace
    | InNumberFace
    | InGroupFace;

/**
 * @exports
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
    | TextAreaProps
    | TreeSelectProps
    | InputNumberProps
    | InoutGroupFaceProps;

/**
 * @exports
 * @description Radio and Select Options types
 * @type   {string | ReactNode}  label
 * @type   {string | number | any}  value
 * @type   {boolean}  disabled
 * @type   {boolean}  checked
 * @type   {string}  className
 */
export interface OptionItem {
    label: string | ReactNode;
    value: string | number | any;
    disabled?: boolean;
    checked?: boolean;
    className?: string;
}

/**
 * @exports
 * @description Radio, Checkbox, Select Active Options Source
 * @type    {Object} Group 动态数据源
 * @type    {Array<any>} Source 数据源
 * @type    {string | void} Value 为空则取当前对象
 * @type    {string | void} Label 为空则取当前对象
 * @type    {string | void} Sort 传递对象的排序值
 * @type    {Array<string>} Disabled 根据 传入的值 筛选当前项是否被禁用
 * @type    {Array<string>} Checked 根据 Value 筛选当前项是否被禁用
 */
export interface OptionSource {
    readonly Group?: {
        readonly Value?: string | void;
        readonly Label?: string | void;
        readonly Sort?: string | void;
        readonly Disabled?: Array<string>;
        readonly Checked?: Array<string>;
        readonly Source: Array<any>;
    };
}

/**
 * @exports
 * @description CheckBox/Select/Radio
 * @type    {?Array<OptionItem>}   Options
 */
export interface GroupSource extends OptionSource {
    readonly Options?: Array<OptionItem>;
}

/**
 * @exports
 * @description CheckBox/Select/Radio
 * @type    {Array<OptionItem>}   Options
 */
export interface RequireGroupSource extends OptionSource {
    readonly Options: Array<OptionItem>;
}

/**
 * @exports
 * @description form item props
 * @type    {FormItemProps} LabelProps
 * @type    {ControllerProps} NodeProps
 */
export interface FormSingleProps<T = ControllerProps> {
    readonly LabelProps?: FormItemProps;
    readonly NodeProps?: T;
}

/**
 * @exports
 * @description FormItemTypes
 * @type   {LabelProps}  FormItem Props
 * @type   {NodeProps}  FormController Props
 * @type   {component}   FormController  Key In FormRender
 * @type   {inChild} FormController  children
 */
export interface FormItemTypes extends FormSingleProps {
    readonly component: ComponentsName;
    readonly inChild?: RenderNode | FormListProps;
}

/**
 * @exports
 * @description render data list
 */
export type ControllerItem = Record<ComponentsName, ControllerTypes>;

/**
 * @exports
 * @description antd FormItem Col
 * @type    {ColProps} labelCol
 * @type    {ColProps} wrapperCol
 */
export interface FormItemCol {
    readonly labelCol?: ColProps;
    readonly wrapperCol?: ColProps;
}

/**
 * @exports
 * @description formList type
 */
export type FormListProps<T = FormItemTypes> = Array<T>;

/**
 * @exports
 * @description AppForm Ref
 */
export type AppFormInstance<V = any> = FormInstance<V>;

/**
 * @exports
 * @description WrapperTypes
 * @type    {ColProps} ColProps 外包装元素属性
 */
export interface WrapperTypes extends FormItemCol {}

/**
 * @exports
 * @description form Submit Function CallBack & Params;
 * @type    {FormListProps} formList
 */
export type FormRefObject = {
    formList?: FormListProps;
};

/**
 * @exports
 * @description form component props
 * @type    {AppFormInstance<Val>}  formInstance 表单实例对象,必选参数
 * @type    {?Array<FormListProps>}  dynamicFormList 按需加载的表单控件
 * @type    {?ReactNode} 表单按钮
 * @type    {?Partial<Omit<FormProps, 'form'>>}  Antd Form API Props
 * @type    {?boolean} spinning 控制表单加载状态
 */
export interface FormComponentProps<Val = any> extends Readonly<FormRefObject> {
    readonly formInstance: AppFormInstance<Val>;
    readonly dynamicFormList?: FormListProps[];
    readonly button?: ReactNode[];
    readonly formProps?: Partial<Omit<FormProps, 'form'>>;
    readonly spinning?: boolean;
}

/**
 * @exports
 * @description FormFC / FormClasss State In Component
 * @type    {boolean}   btnLoading
 * @type    {boolean}   spinning
 */
export interface FormComponentState {
    // btnLoading: boolean;
    // spinning: boolean;
}

/**
 * @exports
 * @description FormList Instance Properties
 */
export interface FormListRefProps extends Readonly<FormRefObject> {}

/**
 * @exports
 * @description FormList Instance State
 */
export interface FormListRefState {}

/**
 * @exports
 * @description FormList Item Instance Properties
 */
export interface FormItemRefProps extends FormItemTypes, FormItemProps {}
