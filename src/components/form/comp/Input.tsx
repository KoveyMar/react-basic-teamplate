import { Component } from 'react';
import type { ComponentClass } from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd/lib/input';

export interface Props extends InputProps {}

interface State {}

class FormInput extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        return <Input {...this.props} />;
    }
}

export type InputFace = ComponentClass<InputProps, State>;

export default FormInput;
