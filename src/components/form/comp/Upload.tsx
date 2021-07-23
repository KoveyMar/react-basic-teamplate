import { Component, ComponentClass } from 'react';
import { Upload, UploadProps, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export interface Props extends UploadProps {}

interface State {}

class FormUpload extends Component<Props, State> {
    public state: State = {};

    public render(): JSX.Element {
        const { children, ...uploadIProps } = this.props;
        return (
            <Upload {...uploadIProps}>
                {children || <Button icon={<UploadOutlined />}>上传</Button>}
            </Upload>
        );
    }
}

export type UploadFace = ComponentClass<Props, State>;

export default FormUpload;
