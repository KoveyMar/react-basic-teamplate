import { useState, useEffect } from 'react';
import {} from 'antd';
import { getDataList } from '@/api/dataManage';

interface Props {}

interface State {}

type Student = {};

export default (props: Props, state: State): JSX.Element => {
    const [data, setData] = useState<Array<Student>>([]);

    useEffect(() => {
        getDataList();
    }, []);

    return <>template</>;
};
