import { Component } from 'react';
import Layout from '@/layout';
import ChildContext from '@/context/ChildContext';
import '@/styles/index.less';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    public render(): JSX.Element {
        const children = this.props.children;
        return (
            <ChildContext.Provider value={children}>
                <Layout />
            </ChildContext.Provider>
        );
    }
}

export default App;
