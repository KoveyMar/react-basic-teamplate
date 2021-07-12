import { useEffect, ReactNode } from 'react';
import { Button, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TableList from '@/components/table';
import { getDataList } from '@/api/dataManage';
import { FormListProps, GroupColumns, Operation } from '@/types';
import CreateModal from './comp/CreateModal';

interface Props {}

interface State {}

export default (props: Props, state: State): JSX.Element => {
    const columns: GroupColumns = [
        {
            key: 'drivenName',
            title: 'drivenName',
            dataIndex: 'drivenName',
        },
        {
            key: 'drivenType',
            title: 'drivenType',
            dataIndex: 'drivenType',
        },
        {
            key: 'createTime',
            title: 'createTime',
            dataIndex: 'createTime',
        },
        {
            key: 'isTrue',
            title: 'isTrue',
            dataIndex: 'isTrue',
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
        {
            LabelProps: {
                label: '标签',
                name: 'labelText',
            },
            NodeProps: {
                placeholder: 'please enter labelText',
            },
            component: 'Input',
        },
    ];

    const click = () => {
        // alert(3);
    };

    const opeartion: Operation = [
        <CreateModal>
            <Button type="primary" icon={<PlusOutlined />} onClick={click}>
                添加
            </Button>
        </CreateModal>,
    ];

    useEffect;

    return (
        <>
            <TableList
                query={getDataList}
                header={{
                    Search: query,
                }}
                opeartion={opeartion}
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
            />
        </>
    );
};
