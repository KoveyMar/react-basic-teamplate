/**
 * @description UmiJS router 并无实现路由跳转钩子,将由此页面实现
 */
import { ReactNode } from 'react';
import { Redirect } from 'umi';
import { getLocalStore } from '@/utils/storage';
import { APP_TOKEN } from '@/global';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

interface Props {
    children: ReactNode;
}

interface State {}

export default (props: Props, state: State): JSX.Element => {
    const Token = getLocalStore<string>(APP_TOKEN);

    function hasToken(): JSX.Element {
        NProgress.done();
        return <Redirect to="/home" />;
    }

    function noToken(): JSX.Element {
        NProgress.done();
        return <Redirect to="/login" />;
    }

    function routeEach(): JSX.Element {
        NProgress.start();
        return Token ? hasToken() : noToken();
    }

    return routeEach();
};
