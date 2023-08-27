import { useEffect, useState } from 'react';
import { Typography } from 'antd';

interface Props {}

interface State {}

export default function TestPage(props: Props): JSX.Element {
    return (
        <>
            <Typography.Title level={1} children={'Hello World!'} />
        </>
    );
}
