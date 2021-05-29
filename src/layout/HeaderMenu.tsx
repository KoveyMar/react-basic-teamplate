import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { RouterTypes } from '@/router/routerBasic';

interface Props {}

interface State {}

const { Header } = Layout;
const { Item } = Menu;

interface ListItem extends RouterTypes {
    text: string;
    key?: string | number;
}

class HeaderMenu extends Component<Props, State> {

    private MenuList: Array<ListItem> = [
        {
            text: '菜单'
        },
        {
            text: '系统'
        },
        {
            text: '用户'
        }
    ];

    public render():JSX.Element {
        return (
            <Header className="header">
                <Menu theme="dark" mode="horizontal">
                    {
                        this.MenuList.map( (item: ListItem, index: number) => (
                                <Item key={index}>
                                    { item.text }
                                </Item>
                            )
                        )
                    }
                </Menu>
            </Header>
        ); 
    }
}

export default HeaderMenu;
