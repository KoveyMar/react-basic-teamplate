import React, { Component, RefObject } from 'react';
import { history, ConnectProps, LoginTypes, Dispatch, connect } from 'umi';
import { Row, Col, FormProps, FormInstance, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import style from '@/styles/login.less';
import logo from '@/assets/img/logo.svg';
import { APP_TOKEN } from '@/global';
import { setLocalStore } from '@/utils/storage';
import { FormClass } from '@/components/form';
import { FormListProps } from '@/types/form';

interface Props extends FormProps, ConnectProps {
    dispatch: Dispatch;
}

interface State {}

class Login extends Component<Props, State> {
    private FormList: FormListProps = [
        {
            LabelProps: {
                label: '用户名',
                name: 'username',
                rules: [
                    {
                        required: !0,
                        message: '请输入用户名',
                    },
                ],
            },
            NodeProps: {
                prefix: <UserOutlined />,
                placeholder: 'please enter username',
            },
            component: 'Input',
        },
        {
            LabelProps: {
                label: '密码',
                name: 'password',
                rules: [
                    {
                        required: !0,
                        message: '请输入密码',
                    },
                ],
            },
            NodeProps: {
                placeholder: 'please enter password',
                prefix: <LockOutlined />,
                type: 'password',
            },
            component: 'Input',
        },
    ];

    private formRef: RefObject<FormInstance> = React.createRef<FormInstance>();

    private submitHandle = (values: LoginTypes) => {
        const { dispatch } = this.props;

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
    };

    public componentDidMount(): void {}

    public state: State = {};

    public render(): JSX.Element {
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
                <FormClass
                    formList={this.FormList}
                    formRef={this.formRef}
                    onSubmit={this.submitHandle}
                />
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
