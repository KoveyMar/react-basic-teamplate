import React, { Component, ComponentClass } from 'react';
import { Input, InputProps } from 'antd';
import ChildContext from '@/context/ChildContext';

// type K = React.SyntheticEvent<any> | React.KeyboardEvent<HTMLInputElement>;

export interface Props extends InputProps {}

interface State {}

class FormInput extends Component<Props, State> {
    static contextType = ChildContext;

    public state: State = {};

    public render(): JSX.Element {
        return <Input {...this.props} />;
    }
}

export type InputFace = ComponentClass<InputProps, State>;

export default FormInput;
