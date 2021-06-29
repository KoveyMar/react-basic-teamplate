/**
 * @description 控制访问权限
 */
import { Redirect } from 'umi';
import { ReactNode } from 'react';
import { getLocalStore } from '@/utils/storage';
import { APP_TOKEN } from '@/global';

interface Props {
    children?: ReactNode;
}

interface State {}
/**
 * @description router 权限控制
 * @date 2021-06-09
 * @returns {any}
 */
export default (props: Props, state: State): JSX.Element => {
    const T = getLocalStore(APP_TOKEN);
    const { children } = props;
    return !T ? <Redirect to="/login" /> : <>{children}</>;
};
