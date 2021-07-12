import React, { Component, RefObject } from 'react';
import { FormInstance } from 'antd';
import { FormComp } from '@/components/form';
import { FormListProps } from '@/types/form';

interface Props {}

interface State {
    Bound: any;
}

class Service extends Component<Props, State> {
    public state: State = {
        Bound: 'The Radio Is Null',
    };

    private formRef: RefObject<FormInstance> = React.createRef<FormInstance>();

    private formList: FormListProps = [
        {
            LabelProps: {
                label: 'List',
                name: 'List',
                initialValue: 'New',
            },
            NodeProps: {
                Options: [
                    {
                        label: 'New',
                        value: 'New',
                    },
                    {
                        label: 'Old',
                        value: 'Old',
                    },
                ],
                onChange: (e: any) => {
                    this.setState(
                        {
                            Bound: `The Radio Value Is Change -- ${e.target.value}`,
                        },
                        () => {
                            this.formRef.current!.setFieldsValue({
                                Bound: this.state.Bound,
                            });
                        },
                    );
                },
            },
            component: 'Radio',
        },
        {
            LabelProps: {
                label: 'Name',
                name: 'SystemName',
                rules: [
                    {
                        required: !0,
                        message: 'Please Enter New System Names',
                    },
                ],
            },
            NodeProps: {
                placeholder: 'please enter your System Name',
            },
            component: 'Input',
        },
        {
            LabelProps: {
                label: 'System Type',
                name: 'type',
                rules: [
                    {
                        required: !0,
                        message: 'please select System Type',
                    },
                ],
            },
            NodeProps: {
                Options: [
                    {
                        label: 'Service',
                        value: 'Service',
                    },
                    {
                        label: 'Role',
                        value: 'Role',
                    },
                ],
                placeholder: 'please select System Type',
                onChange: (e: MouseEvent) => {},
            },
            component: 'Select',
        },
        {
            LabelProps: {
                label: 'Default Bound',
                name: 'Bound',
                initialValue: this.state.Bound,
            },
            NodeProps: {
                placeholder: 'please enter your Default Bound',
                readOnly: !0,
            },
            component: 'Input',
        },
    ];

    public componentDidMount(): void {}

    protected onReset(): void {
        this.formRef.current!.resetFields();
    }

    private onSubmit(values?: any): void {
        console.log(values);
    }

    public render(): JSX.Element {
        return (
            <div
                className="define-container"
                style={{
                    height: '100%',
                    background: '#fff',
                    padding: '10px',
                }}
            >
                <FormComp
                    formList={this.formList}
                    formRef={this.formRef}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

export default Service;
