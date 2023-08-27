import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type {
    DataSource,
    FormListProps,
    GroupColumns,
    Operation,
    SysResponse,
} from '@/types';
import TableList from '@/components/table';

interface Props {}

interface State {
    refresh: Array<string>;
}

export default function TempTable(props: Props): JSX.Element {
    const [refresh, setRefresh] = useState<State['refresh']>([]);

    const columns: GroupColumns = [
        {
            key: 'name',
            dataIndex: 'name',
            title: 'name',
        },
    ];

    /**
     * @template    FormList --example
     */
    const Search: FormListProps = [
        {
            LabelProps: {
                label: '名称',
                name: 'name',
            },
            NodeProps: {
                placeholder: 'please enter name',
            },
            component: 'Input',
        },
    ];

    const operation: Operation = [
        <Button type="primary" icon={<PlusOutlined />} children={'添加'} />,
    ];

    async function getData<T extends SysResponse<DataSource>>(): Promise<T> {
        return Promise.resolve({
            code: 200,
            data: { records: [], total: 0, size: 0, current: 0 },
            message: '',
        });
    }

    useEffect;

    return (
        <TableList
            query={getData}
            header={{
                Search,
            }}
            operation={operation}
            refresh={refresh}
            tableProps={{
                columns,
                rowKey: (record: any) => record.id,
            }}
        />
    );
}
