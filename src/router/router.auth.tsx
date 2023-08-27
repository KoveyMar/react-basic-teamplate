/**
 * @description 控制访问权限
 */
import { Redirect } from 'umi';
import { ReactNode } from 'react';
import { LocalStore } from '@/utils';
import { APP_TOKEN, HOME_ROUTER } from '@/global';
import NProgress from '@/components/nprogress';

interface Props {
    children?: ReactNode;
}

interface State {}

/**
 * @description router 跳转
 * @date 2021-06-09
 * @returns {any}
 */
export default function Auth(props: Props): JSX.Element {
    NProgress.start();
    const T = LocalStore.getStore(APP_TOKEN);
    NProgress.done();
    return <Redirect to={!T ? '/login' : HOME_ROUTER} />;
}
