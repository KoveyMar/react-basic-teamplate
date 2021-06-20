import { Component } from 'react';
import { Button, Input } from 'antd';

interface Props {}

interface State {
    Index: number;
}

class Service extends Component<Props, State> {
    static title: string = '';

    public state: State = {
        Index: 2,
    };

    public componentDidMount(): void {}

    protected buttonHandle(): void {
        let j = this.state.Index;
        j++;
        this.setState({
            Index: j,
        });
    }

    public render(): JSX.Element {
        return (
            <div className="define-container">
                <Button type="primary" onClick={() => this.buttonHandle()}>
                    Submit
                </Button>
                <Input value={this.state.Index} />
            </div>
        );
    }
}

export default Service;
