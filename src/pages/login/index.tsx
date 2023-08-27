import { useState } from 'react';
import { history, Dispatch, useDispatch } from 'umi';
import { Row, Col, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { APP_TOKEN, HOME_ROUTER } from '@/global';
import { AppMessage, LocalStore } from '@/utils';
import { AppForm } from '@/components/form';
import type { FormListProps, SysResponse } from '@/types';
import type { LoginModel } from '@/types/models';
import style from '@/styles/pages/login.less';
import logo from '@/assets/img/logo.svg';
import { useFormRef } from '@/hooks/useFormRef';

interface Props {}

interface State {
    btnLoading: boolean;
}

export default function Login(props: Props): JSX.Element {
    const FormRef = useFormRef<LoginModel>();
    const dispatch = useDispatch<Dispatch<LoginModel>>();
    const [btnLoading, setBtnLoading] = useState<State['btnLoading']>(!1);

    const formList: FormListProps = [
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
                placeholder: 'please enter username/admin',
                prefix: <UserOutlined />,
                // onPressEnter: onSubmit,
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
                placeholder: 'please enter password/12345',
                prefix: <LockOutlined />,
                onPressEnter: onSubmit,
            },
            component: 'InPassword',
        },
    ];

    /**
     * @description enter Listener
     * @date 2022-08-17
     * @returns {void}
     */
    function onSubmit(): void {
        FormRef.validateFields().then((values: LoginModel) => {
            if (values) {
                submitHandle(values);
            }
        });
    }

    /**
     * @description 提交到 model
     * @date 2021-07-23
     * @param {LoginModel} values
     * @returns {void}
     */
    function submitHandle(values?: LoginModel): void {
        setBtnLoading(!0);
        dispatch({
            type: 'login/requestLogin',
            payload: values,
        })
            .then((res: SysResponse) => {
                if (res.code !== 200) return AppMessage.Error(res);
                AppMessage.Success(res);
                const token = res.data;
                LocalStore.setStore(APP_TOKEN, token);
                setTimeout(() => {
                    history.push(HOME_ROUTER);
                }, 2e2);
            })
            .finally(() => setBtnLoading(!1));
    }

    return (
        <div className={style['login-container']}>
            <div className={style.logo}>
                <Row gutter={16}>
                    <Col sm={8}>
                        <img className={style.icon} src={logo} />
                    </Col>
                    <Col sm={16}>
                        <Typography.Title
                            className={style.text}
                            level={3}
                            children={'系统管理'}
                        />
                    </Col>
                </Row>
            </div>
            <AppForm
                formInstance={FormRef}
                formList={formList}
                button={[
                    <Button
                        block
                        key={'submit'}
                        shape={'round'}
                        type={'primary'}
                        loading={btnLoading}
                        onClick={() => onSubmit()}
                        children={'确认'}
                    />,
                ]}
            />
        </div>
    );
}
