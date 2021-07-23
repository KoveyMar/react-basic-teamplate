import { useEffect } from 'react';
import { Button, Col } from 'antd';
// import { history } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import TableList from '@/components/table';
import { getDataList } from '@/api/dataManage';
import { FormListProps, GroupColumns, Operation } from '@/types';
import CreateTemplate from './createTemplate';

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
        // history.push({
        //     pathname: '/home/dataManageTemplate/create',
        //     query: {
        //        create: '0'
        //     }
        // });
    };

    const operation: Operation = [
        <CreateTemplate>
            <Button type="primary" icon={<PlusOutlined />} onClick={click}>
                添加
            </Button>
        </CreateTemplate>,
    ];

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
            />
        </>
    );
};
