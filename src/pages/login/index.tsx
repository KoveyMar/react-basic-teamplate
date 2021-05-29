import React, { Component, RefObject } from 'react';
import {
    Input,
    Button,
    Form,
    Row,
    Col,
    FormProps,
    FormItemProps,
    FormInstance,
} from 'antd';
import style from '@/styles/login.less';
import logo from '@/assets/img/logo.svg';

interface Props extends FormProps {
    formRef: FormInstance;
}

interface State {
    name: string;
    password: string;
    btnLoading: boolean;
    token?: string;
}

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

class Login extends Component<Props, State> {
    private FormList: Array<FormItemProps> = [
        {
            label: '用户名',
            name: 'username',
            ...formItemLayout,
            rules: [
                {
                    required: !0,
                    message: '请输入用户名',
                },
            ],
        },
        {
            label: '密码',
            name: 'password',
            ...formItemLayout,
            rules: [
                {
                    required: !0,
                    message: '请输入密码',
                },
            ],
        },
    ];

    private formRef: RefObject<FormInstance> = React.createRef<FormInstance>();

    public state: State = {
        name: '',
        password: '',
        btnLoading: !1,
    };

    private submitHandle = () => {
        this.formRef
            .current!.validateFields()
            .then((values: State) => {
                this.setState({
                    btnLoading: !0,
                });
                if (values) {
                }
            })
            .catch((err: any) => {
                console.error(err);
            })
            .finally(() => {
                this.setState({
                    btnLoading: !1,
                });
            });
    };

    public render(): JSX.Element {
        const { btnLoading } = this.state;
        return (
            <div className={style['login-container']}>
                <div className={style.logo}>
                    <Row gutter={16}>
                        <Col sm={8}>
                            <img className={style.icon} src={logo} />
                        </Col>
                        <Col sm={16}>
                            <p className={style.text}>系统管理</p>
                        </Col>
                    </Row>
                </div>
                <Form ref={this.formRef}>
                    {this.FormList.map((item: FormItemProps, index: number) => (
                        <FormItem key={index} {...item}>
                            <Input placeholder={`请输入${item.name}`} />
                        </FormItem>
                    ))}
                    <FormItem {...tailLayout}>
                        <Button
                            type="primary"
                            onClick={this.submitHandle}
                            loading={btnLoading}
                        >
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Login;
