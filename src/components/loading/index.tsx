import { Component } from 'react';
import '@/styles/loading.less';

interface Props {}

interface State {}

class Loading extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <div className="rotate-loading">
                <span className="loading-text">Loading</span>
            </div>
        );
    }
}

export default Loading;
