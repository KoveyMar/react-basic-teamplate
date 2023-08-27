import { useEffect } from 'react';
import { Dispatch, Link, Location, useDispatch, useSelector } from 'umi';
import { Result, Button } from 'antd';
import type RootState from '@/types/models';
import { HOME_ROUTER } from '@/global';

interface Props {
    location: Location<{ code: string | number }>;
}

interface State {}

export default function Error(props: Props): JSX.Element {
    const info: string =
        'Please check and modify the following information before resubmitting.';
    const dispatch = useDispatch<Dispatch>();
    const { code, message } = useSelector<RootState, RootState['error']>(
        (state) => state.error,
    );

    /**
     * @description 获取页面错误信息
     * @date 2022-08-17
     * @returns {void}
     */
    function getPageError(): void {
        const {
            location: { state, pathname },
        } = props;
        const C =
            state?.code ?? (pathname.split('/')[1] !== 'error' ? 404 : code);
        dispatch({
            type: 'error/getStatus',
            payload: {
                code: C,
            },
        });
    }

    useEffect(() => {
        getPageError();
    }, []);

    return (
        <Result
            status="error"
            title={`Submission Failed: ${code} - ${message}`}
            subTitle={info}
            extra={
                <Button type="primary" key="Home">
                    <Link to={HOME_ROUTER}>Go Home</Link>
                </Button>
            }
        />
    );
}
