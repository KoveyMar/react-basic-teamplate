import { useState, useEffect } from 'react';
import { getDataList } from '@/api/dataManage';
import { FormListProps } from '@/types';

interface Props {}

interface State {}

type Student = {};

export default (props: Props, state: State): JSX.Element => {
    const [data, setData] = useState<Array<Student>>([]);

    const formList: FormListProps = [
        {
            LabelProps: {},
            NodeProps: {},
            component: '',
        },
    ];

    useEffect(() => {
        getDataList();
    }, []);

    return <>template</>;
};
