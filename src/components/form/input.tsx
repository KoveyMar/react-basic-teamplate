import { Component, ComponentClass } from 'react';
import { Input, InputProps } from 'antd';

export interface Props extends InputProps {}

interface State {}

class FormInput extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        return <Input {...this.props} />;
    }
}

export type InputFace = ComponentClass<InputProps, any>;

export default FormInput;
