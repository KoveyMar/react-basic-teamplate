import { Component } from 'react';
import type { ComponentClass } from 'react';
import { Upload, Button, message } from 'antd';
import type { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { UploadOutlined } from '@ant-design/icons';
import { BASE_URL, UPLOAD_FILE_URL } from '@/global';
import type { SysResponse } from '@/types';
import { parseParamString } from '@/utils';

export interface Props extends UploadProps {
    otherParams?: any;
    files?: Array<any>;
}

interface State {
    uploadList: Array<any>;
    uploadURL: string;
}

class FormUpload extends Component<Props, State> {
    public state: State = {
        uploadList: [],
        uploadURL: `${BASE_URL}${UPLOAD_FILE_URL}`,
    };

    /**
     * @description 上传文件
     * @date 2021-09-15
     * @returns {any}
     */
    protected handleChange({ file, fileList, event }: UploadChangeParam): void {
        const { onChange } = this.props;
        // const { filesList } = this.state;
        if (file.status === 'done') {
            const { response } = file;
            if (response) {
                const { code, message: msg }: SysResponse = response;
                code === 200 && message.success(`${msg}` || '上传成功');
            }
        }
        onChange && onChange({ file, fileList, event });
        this.setState({ uploadList: fileList });
    }

    public componentDidMount(): void {
        const { otherParams, files } = this.props;
        if (otherParams) {
            const query =
                typeof otherParams === 'string'
                    ? otherParams
                    : parseParamString(otherParams);
            this.setState({
                uploadURL: this.state.uploadURL + '?' + query,
            });
        }

        if (files) {
            this.setState({
                uploadList: files,
            });
        }
    }

    // public getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {

    // }

    public render(): JSX.Element {
        const { children, ...uploadIProps } = this.props;
        const { uploadList, uploadURL } = this.state;

        const IProps: UploadProps = {
            accept: '*',
            action: uploadURL,
            method: 'post',
            fileList: uploadList,
            ...uploadIProps,
            onChange: (info: UploadChangeParam) => this.handleChange(info),
        };

        return (
            <Upload {...IProps}>
                {children || <Button icon={<UploadOutlined />}>上传</Button>}
            </Upload>
        );
    }
}

export type UploadFace = ComponentClass<Props, State>;

export default FormUpload;
