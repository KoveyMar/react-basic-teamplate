import { Avatar, Dropdown, Menu, Modal } from 'antd';
import type { ItemType } from 'antd/lib/menu/hooks/useItems';
import { UserOutlined } from '@ant-design/icons';
import { history, Dispatch, useDispatch, useSelector } from 'umi';
import { LocalStore } from '@/utils';
import { APP_TOKEN } from '@/global';
import RootState, { type LoginModel } from '@/types/models';

interface Props {}

interface State {}

export default function LogOut(props: Props): JSX.Element {
    const dispatch = useDispatch<Dispatch>();
    const { username } = useSelector<RootState, RootState['login']>(
        (state) => state.login,
    );

    /**
     * @description 注销菜单
     * @date 2022-08-17
     * @returns {any}
     */
    const AvatarMenu: ItemType[] = [
        { label: '注销', key: '1', onClick: logOutHandle },
    ];

    /**
     * @description 注销
     * @date 2022-08-17
     * @returns {any}
     */
    function logOutHandle(): void {
        new Promise((resovle, reject) => {
            Modal.confirm({
                title: '注销',
                content: '确定退出登录吗',
                okText: '确定',
                cancelText: '取消',
                onOk: () => resovle(null),
                onCancel: () => reject(),
            });
        })
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

    return (
        <div className={'log-out'}>
            <Dropdown menu={{ items: AvatarMenu }}>
                <Avatar
                    size="large"
                    alt={username || ''}
                    icon={<UserOutlined />}
                />
            </Dropdown>
        </div>
    );
}
