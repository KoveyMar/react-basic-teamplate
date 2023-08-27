/**
 * @description UmiJS router 并无实现路由跳转钩子,将由此页面实现
 */
import { ReactNode } from 'react';
import { Redirect } from 'umi';
import { LocalStore } from '@/utils';
import { APP_TOKEN, HOME_ROUTER } from '@/global';
import NProgress from '@/components/nprogress';

interface Props {
    children: ReactNode;
}

interface State {}

/**
 * @deprecated
 * @param props
 * @returns {JSX.Element}
 */
export default function AppRedirect(props: Props): JSX.Element {
    const Token = LocalStore.getStore<string>(APP_TOKEN);

    function hasToken(): JSX.Element {
        NProgress.done();
        return <Redirect to={HOME_ROUTER} />;
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
}
