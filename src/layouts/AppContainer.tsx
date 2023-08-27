import { Component } from 'react';
import AppBread from './AppBread';
// import SideMenu from './SideMenu';
import AppContent from './AppContent';

interface Props {}

interface State {}

class AppContainer extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <>
                {/* <SideMenu /> */}
                <AppBread />
                <AppContent />
            </>
        );
    }
}

export default AppContainer;
