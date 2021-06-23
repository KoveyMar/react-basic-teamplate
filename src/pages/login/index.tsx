import React, {
    Component,
    ReactNode,
    RefObject,
    ForwardRefExoticComponent,
    ComponentClass,
} from 'react';
import { history, ConnectProps, LoginTypes, Dispatch, connect } from 'umi';
import {
    Input,
    Button,
    Form,
    Row,
    Col,
    FormProps,
    FormItemProps,
    FormInstance,
    message,
} from 'antd';
import { InputProps, PasswordProps } from 'antd/lib/input';
import { UserOutlined } from '@ant-design/icons';
import style from '@/styles/login.less';
import logo from '@/assets/img/logo.svg';
import { APP_TOKEN } from '@/global';
import { setLocalStore } from '@/utils/storage';

interface Props extends FormProps, ConnectProps {
    formRef: FormInstance;
    login: LoginTypes;
    dispatch: Dispatch;
}

interface State {
    username?: string;
    password?: string;
    btnLoading: boolean;
    token?: string;
}

interface ItemTypes {
    props: FormItemProps;
    render:
        | ComponentClass<InputProps, any>
        | ForwardRefExoticComponent<PasswordProps & React.RefAttributes<any>>;
    type?: string;
    icon?: ReactNode;
    nodeProps?: InputProps | PasswordProps;
}

const FormItem = Form.Item;

const { Password: InPassword } = Input;

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
    private FormList: Array<ItemTypes> = [
        {
            props: {
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
            nodeProps: {
                suffix: <UserOutlined />,
            },
            render: Input,
        },
        {
            props: {
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
            render: InPassword,
        },
    ];

    private formRef: RefObject<FormInstance> = React.createRef<FormInstance>();

    private submitHandle = () => {
        const { dispatch } = this.props;
        this.formRef
            .current!.validateFields()
            .then((values: State) => {
                this.setState({
                    btnLoading: !0,
                });
                if (values) {
                    dispatch({
                        type: 'login/request',
                        payload: values,
                    }).then((res: any) => {
                        if (res.code !== 200) return message.error(res.message);
                        const { token } = res.data;
                        setLocalStore(APP_TOKEN, token);
                        message.success(res.message);
                        setTimeout(() => {
                            history.push('/home');
                        }, 2e2);
                    });
                }
            })
            .catch((err: any) => {
                // console.error(err);
            })
            .finally(() => {
                this.setState({
                    btnLoading: !1,
                });
            });
    };

    public componentDidMount(): void {}

    public state: State = {
        btnLoading: !1,
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
                    {this.FormList.map((item: ItemTypes, index: number) => (
                        <FormItem key={index} {...item.props}>
                            {React.createElement(
                                item.render,
                                {
                                    ...item.nodeProps,
                                    placeholder: `Please Enter ${item.props.name}`,
                                },
                                null,
                            )}
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

const mapStateToProps = ({ login }: { login: LoginTypes }) => {
    return {
        login,
    };
};

export default connect(mapStateToProps)(Login);
