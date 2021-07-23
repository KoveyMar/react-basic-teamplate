import { Component, ForwardRefExoticComponent } from 'react';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';

export interface Props extends TextAreaProps {}

interface State {}

const { TextArea } = Input;

class FormTextArea extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        return <TextArea {...this.props} />;
    }
}

export type TextAreaFace = ForwardRefExoticComponent<TextAreaProps>;

export default FormTextArea;
