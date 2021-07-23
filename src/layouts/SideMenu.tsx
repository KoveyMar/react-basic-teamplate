import { Component } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { Link } from 'umi';
import menu from '@/layouts/menu';
import { RouterTypes } from '@/router/router.basic';

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
                                            key={`chilrdren_Menu_@${index}`}
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
                                <Link to={item.path}>{item.name}</Link>
                            </MenuItem>
                        ),
                    )}
                </Menu>
            </Sider>
        );
    }
}

export default SideMenu;
