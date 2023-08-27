import type { RouterTypes } from '@/types/router';
import test from './pages/test';

/**
 * @description 跳转首页全局参数 HOME_ROUTER 位于 /global/config -
 */

/**
 * @description 权限跳转
 */
const AuthWrappers = ['@/router/router.auth'];

/**
 * @description 主页跳转
 */
const HomeWrappers = ['@/router/router.home'];

/**
 * @description 如页面过多,应在 /router/pages 下建立模块, 使用 import
 * @example import test from './pages/test';
 *
 */
export const views: Array<RouterTypes> = [
    ...test,
    {
        name: '测试',
        path: '/home/test',
        component: '@/pages/test/index',
        exact: true,
    },
];

const routes: Array<RouterTypes> = [
    {
        path: '/',
        component: '@/pages/index',
        wrappers: AuthWrappers,
    },
    // {
    //     path: '/redirect',
    //     component: '@/pages/redirect/index',
    // },
    {
        path: '/home',
        component: '@/pages/index',
        wrappers: HomeWrappers,
        routes: views,
    },
    {
        path: '/login',
        name: '登录',
        component: '@/pages/login/index',
        exact: true,
    },
    {
        path: '/404',
        title: '404',
        component: '@/pages/error/index',
    },
    {
        path: '/error',
        title: 'error',
        component: '@/pages/error/index',
    },
];

export default routes;
