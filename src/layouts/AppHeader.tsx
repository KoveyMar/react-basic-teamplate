import { Component } from 'react';
import { Layout, Avatar } from 'antd';
import { Link } from 'umi';
import AppIcon from '@/assets/img/AppIcon.svg';
import LogOut from './LogOut';
import HeaderMenu from './HeaderMenu';

interface Props {}

interface State {}

const { Header } = Layout;

class AppHeader extends Component<Props, State> {
    public state: State = {};

    public componentDidMount(): void {}

    public shouldComponentUpdate(): boolean {
        return !0;
    }

    public componentWillUnmount(): void {}

    public render(): JSX.Element {
        return (
            <Header className="header">
                <div
                    className={'logo'}
                    children={
                        <Link
                            className="link"
                            to="/home"
                            children={<img src={AppIcon} />}
                        />
                    }
                />
                <HeaderMenu />
                <LogOut />
            </Header>
        );
    }
}

export default AppHeader;
