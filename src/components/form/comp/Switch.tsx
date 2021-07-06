import { Component, ComponentClass } from 'react';
import { Switch, SwitchProps } from 'antd';

export interface Props extends SwitchProps {}

interface State {}

class FormSwitch extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        return <Switch {...this.props} />;
    }
}

export type SwitchFace = ComponentClass<Props, State>;

export default FormSwitch;
