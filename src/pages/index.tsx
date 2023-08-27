import { Component, ReactElement } from 'react';
import AppLayouts from '@/layouts';
import ChildContext from '@/context/ChildContext';

interface Props {
    children: ReactElement;
}

interface State {}

export default class App extends Component<Props, State> {
    public render(): JSX.Element {
        const { children } = this.props;
        return (
            <ChildContext.Provider value={children}>
                <AppLayouts />
            </ChildContext.Provider>
        );
    }
}
