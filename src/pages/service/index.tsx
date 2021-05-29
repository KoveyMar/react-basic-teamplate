import { Component } from 'react';
// import { Button, Input } from 'antd';

interface Item {
    name: string;
    age: number;
}

interface Props {}

interface State {
    list: Array<Item>;
    Index: number;
}

class Service extends Component<Props, State> {
    static title: string = '';

    public state: State = {
        Index: 2,
        list: [
            {
                name: 'Lancy',
                age: 199,
            },
            {
                name: 'Bob',
                age: 13,
            },
            {
                name: 'Tom',
                age: 12,
            },
        ],
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
                {this.state.list.map((item: Item, index: number) => (
                    <p key={index}>
                        <span>{item.name}</span>
                        <span>{item.age}</span>
                    </p>
                ))}
            </div>
        );
    }
}

export default Service;
