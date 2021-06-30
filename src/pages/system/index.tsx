import React, { Component, RefObject } from 'react';
import { Button, Form, FormInstance } from 'antd';
import FormList from '@/components/form';
import { FormItemTypes } from '@/types/form';
import { formItemLayout, tailLayout } from '@/components/form/style';

interface Props {}

interface State {
    Index: number;
    Bound: any;
    btnLoading: boolean;
}

const FormItem = Form.Item;

class Service extends Component<Props, State> {
    public state: State = {
        Index: 2,
        Bound: 'The Radio Is Null',
        btnLoading: !1,
    };

    private formRef: RefObject<FormInstance> = React.createRef<FormInstance>();

    private list: Array<FormItemTypes> = [
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

    protected buttonHandle(): void {
        let j = this.state.Index;
        j++;
        this.setState({
            Index: j,
        });
    }

    private Submit(): void {}

    public render(): JSX.Element {
        const { btnLoading } = this.state;
        return (
            <div
                className="define-container"
                style={{
                    height: '100%',
                    background: '#fff',
                    padding: '10px',
                }}
            >
                <Form ref={this.formRef} {...formItemLayout}>
                    <FormList formList={this.list} />
                    <FormItem {...tailLayout}>
                        <Button
                            type="primary"
                            style={{ marginRight: '10px' }}
                            onClick={() => this.Submit}
                            loading={btnLoading}
                        >
                            Submit
                        </Button>
                        <Button
                            onClick={() => this.buttonHandle}
                            loading={btnLoading}
                        >
                            Bound
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Service;
