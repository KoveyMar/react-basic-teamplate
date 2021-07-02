import { Component, ComponentClass } from 'react';
import { Checkbox } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';
import { OptionItem } from '@/types/form';

type K = OptionItem & {
    disabled?: boolean;
};

export interface Props extends CheckboxGroupProps {
    Options: Array<K>;
}

interface State {}

const { Group } = Checkbox;

class FormCheckbox extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        const { Options, ...CheckProps } = this.props;
        return <Group options={Options} {...CheckProps} />;
    }
}

export type CheckboxFace = ComponentClass<Props, State>;

export default FormCheckbox;
