import { Component } from 'react';
import type { ForwardRefExoticComponent } from 'react';
import { Input } from 'antd';
import type { PasswordProps } from 'antd/lib/input';

export interface Props extends PasswordProps {}

interface State {}

const { Password: InPassword } = Input;

class FormInPassword extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        return <InPassword {...this.props} />;
    }
}

export type InPasswordFace = ForwardRefExoticComponent<
    PasswordProps & React.RefAttributes<any>
>;

export default FormInPassword;
