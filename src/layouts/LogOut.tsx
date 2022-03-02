import { ClassAttributes, Component } from 'react';
import { Avatar, Dropdown, Menu, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { history, ConnectProps, LoginTypes, Dispatch, connect } from 'umi';
import styles from '@/styles/layout/index.less';
import { LocalStore } from '@/utils/storage';
import { APP_TOKEN } from '@/global';

type T = 'login' | 'dispatch';

interface Props extends ConnectProps, Omit<ClassAttributes<LogOut> & any, T> {
    login: LoginTypes;
    dispatch: Dispatch;
}

interface State {}

const MenuItem = Menu.Item;

class LogOut extends Component<Props, State> {
    private readonly menu: JSX.Element = (
        <Menu>
            <MenuItem
                key="1"
                onClick={() => {
                    this.logOutHandle();
                }}
            >
                注销
            </MenuItem>
        </Menu>
    );

    protected logOutHandle(): void {
        const { dispatch, login } = this.props;
        const confirm = () =>
            new Promise((resovle, reject) => {
                Modal.confirm({
                    title: '注销',
                    content: '确定退出登录吗',
                    okText: '确定',
                    cancelText: '取消',
                    onOk: () => resovle(null),
                    onCancel: () => reject(),
                });
            });
        confirm()
            .then(() => {
                dispatch({
                    type: 'login/logOut',
                }).then(() => {
                    LocalStore.removeStore(APP_TOKEN);
                    setTimeout(() => {
                        history.push('/');
                    }, 2e2);
                });
            })
            .catch();
    }

    public render(): JSX.Element {
        const { username } = this.props.login;
        return (
            <div className={styles['log-out']}>
                <Dropdown overlay={this.menu}>
                    <Avatar
                        size="large"
                        alt={username || ''}
                        icon={<UserOutlined />}
                    />
                </Dropdown>
            </div>
        );
    }
}

const mapStateToProps = ({ login }: { login: LoginTypes }) => {
    return {
        login,
    };
};

export default connect(mapStateToProps)(LogOut);
