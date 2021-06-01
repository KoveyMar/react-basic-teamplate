import { Component } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { getRandomValue } from '@/utils/RandomValue';

interface Props {}

interface State {}

class Service extends Component<Props, State> {
    private columns: ColumnsType<any> = [
        {
            key: 'age',
            dataIndex: 'age',
            title: 'age',
        },
        {
            key: 'name',
            dataIndex: 'name',
            title: 'name',
        },
        {
            key: 'role',
            dataIndex: 'role',
            title: 'role',
        },
    ];

    protected createData(dataLength: number): Array<any> {
        let u: Array<any> = [];
        let j = 0;
        for (; j < dataLength; j++) {
            u.push({
                age: getRandomValue(10),
                role: 'admin',
                name: `lancy_${getRandomValue(200)}`,
                id: j,
            });
        }
        return u;
    }

    public state: State = {};

    public componentDidMount(): void {}

    public render(): JSX.Element {
        return (
            <Table
                columns={this.columns}
                dataSource={this.createData(10)}
                rowKey={(record: any) => record.id}
            ></Table>
        );
    }
}

export default Service;
