import React, { Component } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { Link } from 'umi';
import menu from '@/menu';
import routes, { RouterTypes } from '@/router/router.basic';

interface Props {}

interface State {}

interface MenuTypes extends MenuProps {}

const { SubMenu } = Menu;

const MenuItem = Menu.Item;

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
                            <SubMenu key={`sub${index}`} title={item.title}>
                                {item.routes.map(
                                    (chdMenu: RouterTypes, index: number) => (
                                        <MenuItem
                                            key={`chilrdren_Menu_@${index}`}
                                        >
                                            <Link to={chdMenu.path}>
                                                {chdMenu.title}
                                            </Link>
                                        </MenuItem>
                                    ),
                                )}
                            </SubMenu>
                        ) : (
                            <MenuItem key={`sub${index}`}>
                                <Link to={item.path}>{item.title}</Link>
                            </MenuItem>
                        ),
                    )}
                </Menu>
            </Sider>
        );
    }
}

export default SideMenu;
