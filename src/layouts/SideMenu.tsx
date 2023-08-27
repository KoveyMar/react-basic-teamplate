import { Component } from 'react';
import { Layout, Menu, type MenuProps } from 'antd';
import { Link } from 'umi';
import menu from '@/layouts/menu';
import type { RouterTypes } from '@/types/router';

interface Props {}

interface State {}

interface MenuTypes extends MenuProps {}

const { SubMenu, Item: MenuItem } = Menu;

const { Sider } = Layout;

class SideMenu extends Component<Props, State> {
    private sideWidth: number = 260;

    private menuOptions: MenuTypes = {
        mode: 'inline',
        style: {
            height: '100%',
            borderRight: 0,
        },
    };

    public render(): JSX.Element {
        return (
            <Sider width={this.sideWidth}>
                <Menu {...this.menuOptions}>
                    {menu.map((item: RouterTypes, index: number) =>
                        item.routes && item.routes.length ? (
                            <SubMenu key={`sub${index}`} title={item.name}>
                                {item.routes.map(
                                    (chdMenu: RouterTypes, index: number) => (
                                        <MenuItem
                                            key={`chilrdren_Menu_@${chdMenu.title}_@${index}`}
                                        >
                                            <Link to={chdMenu.path}>
                                                {chdMenu.name}
                                            </Link>
                                        </MenuItem>
                                    ),
                                )}
                            </SubMenu>
                        ) : (
                            <MenuItem key={`sub${index}`}>
                                {item.path ? (
                                    <Link to={item.path} children={item.name} />
                                ) : (
                                    <span children={item.name} />
                                )}
                            </MenuItem>
                        ),
                    )}
                </Menu>
            </Sider>
        );
    }
}

export default SideMenu;
