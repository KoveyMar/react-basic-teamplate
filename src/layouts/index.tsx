import { Component } from 'react';
import type { ReactNode } from 'react';
import { Layout, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';

interface Props {
    children?: ReactNode;
}

interface State {}

class AppLayouts extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <ConfigProvider locale={zhCN}>
                <Layout id="main-continaer" hasSider={!1}>
                    <AppHeader />
                    <AppContainer />
                </Layout>
            </ConfigProvider>
        );
    }
}

export default AppLayouts;
