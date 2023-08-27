import { Component } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd/lib/menu';
import { Link } from 'umi';
import { views } from '@/router/router.basic';
import type { RouterTypes } from '@/types/router';

interface Props {}

interface State {}

export default class HeaderMenu extends Component<Props, State> {
    private get MenuItems(): MenuProps['items'] {
        return views.map((Rt: RouterTypes, index: number) => ({
            label: <Link to={Rt.path} children={Rt.name} />,
            key: `chilrdren_Menu_@${Rt.name}_@${index}`,
        }));
    }

    public state: State = {};

    public componentDidMount(): void {}

    public render(): JSX.Element {
        return (
            <Menu
                className="mid-header"
                mode="horizontal"
                items={this.MenuItems}
            />
        );
    }
}
