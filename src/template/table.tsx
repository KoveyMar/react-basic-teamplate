import { useEffect, ReactNode } from 'react';
import { Button, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getDataList } from '@/api/dataManage';
import { FormListProps, GroupColumns } from '@/types';
import TableList from '@/components/table';

interface Props {}

interface State {}

export default (props: Props, state: State): JSX.Element => {
    const columns: GroupColumns = [
        {
            key: 'drivenName',
            title: 'drivenName',
            dataIndex: 'drivenName',
        },
    ];

    const query: FormListProps = [
        {
            LabelProps: {
                label: '名称',
                name: 'dataSourceDrivenName',
            },
            NodeProps: {
                placeholder: 'please enter name',
            },
            component: 'Input',
        },
    ];

    const operation: Array<ReactNode> = [
        <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => clickHandle()}
            children={'添加'}
        />,
    ];

    function clickHandle(): void {}

    useEffect;

    return (
        <>
            <TableList
                query={getDataList}
                header={{
                    Search: query,
                }}
                operation={operation}
                wrapper={{
                    element: Col,
                    props: {
                        sm: 8,
                        md: 6,
                    },
                }}
                tabelProps={{
                    columns,
                    rowKey: (record: any) => record.drivenId,
                }}
                fuzzy={[]}
            />
        </>
    );
};
