import { Component } from 'react';
import { Layout } from 'antd';
import Bread from './Bread';
import SideMenu from './SideMenu';
import Content from './Content';

interface Props {}

interface State {}

class Container extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <Layout>
                <SideMenu />
                <Layout>
                    <Bread />
                    <Content />
                </Layout>
            </Layout>
        );
    }
}

export default Container;
