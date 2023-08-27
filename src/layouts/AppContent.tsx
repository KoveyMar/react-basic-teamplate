import { Component } from 'react';
import type { Context, ReactElement } from 'react';
import { Layout } from 'antd';
import ChildContext from '@/context/ChildContext';

interface Props {}

interface State {}

const { Content } = Layout;

class AppContent extends Component<Props, State> {
    constructor(props: Props, context: ReactElement) {
        super(props);
        this.context = context;
    }

    static contextType: Context<ReactElement> = ChildContext;

    public context: ReactElement;

    public render(): JSX.Element {
        return <Content className="main-content" children={this.context} />;
    }
}

export default AppContent;
