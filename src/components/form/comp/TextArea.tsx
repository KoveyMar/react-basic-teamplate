import { Component } from 'react';
import type { ComponentClass } from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/lib/input';

export interface Props extends TextAreaProps {}

interface State {}

const { TextArea } = Input;

class FormTextArea extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        return (
            <TextArea autoSize={{ minRows: 4, maxRows: 6 }} {...this.props} />
        );
    }
}

export type TextAreaFace = ComponentClass<TextAreaProps>;

export default FormTextArea;
