import React, { Component } from 'react';
import { Layout } from 'antd';
import ChildContext from '@/context/ChildContext';
import style from '@/styles/layout/index.less';

interface Props {}

interface State {}

const { Content } = Layout;

class Container extends Component<Props, State> {

    static contextType = ChildContext;

    public render():JSX.Element {
        return (
            <Content className={style['main-content']}>
                {
                    this.context
                }
            </Content>
        );
    }
}

export default Container;
