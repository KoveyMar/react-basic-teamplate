import React, { Component, ReactNode } from 'react';
import { Layout } from 'antd';
import style from '@/styles/layout/index.less';
import HeaderMenu from './HeaderMenu';
import Container from './Container';

interface Props {
    children?: ReactNode;
}

interface State {}

class LayutIndex extends Component<Props, State> {

    public render():JSX.Element {
        return (
            <Layout id={style['main-continaer']}>
                <HeaderMenu />
                <Container />
            </Layout>
        ); 
    }
}

export default LayutIndex;
