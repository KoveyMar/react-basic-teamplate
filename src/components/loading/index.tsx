import React, { Component } from 'react';
import { Spin } from 'antd';

interface Props {}

interface State {}

class App extends Component<Props, State> {
    public render(): JSX.Element {
        return (
            <div
                style={{
                    height: '100%',
                    textAlign: 'center',
                    margin: '20px auto',
                }}
            >
                <Spin />
            </div>
        );
    }
}

export default App;
