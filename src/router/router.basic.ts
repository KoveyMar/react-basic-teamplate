import { IConfigFromPlugins } from '@@/core/pluginConfig';

export interface RouterTypes extends IConfigFromPlugins {
    isMenu?: boolean;
    menuTitle?: string;
}

const routes: Array<RouterTypes> = [
    {
        path: '/',
        redirect: '/redirect',
    },
    {
        path: '/redirect',
        component: '@/pages/redirect/index',
    },
    {
        path: '/login',
        title: '登录',
        component: '@/pages/login/index',
    },
    {
        path: '/home',
        component: '@/pages/index',
        wrappers: ['@/router/router.auth'],
        isMenu: !0,
        menuTitle: '首页',
        routes: [
            {
                path: '/home/service',
                component: '@/pages/service/index',
                isMenu: !0,
                menuTitle: '服务',
                exact: true,
            },
            {
                path: '/home/system',
                component: '@/pages/system/index',
                isMenu: !0,
                menuTitle: '系统',
                exact: true,
            },
            {
                path: '/home/role',
                component: '@/pages/role/index',
                isMenu: !0,
                menuTitle: '角色',
                exact: true,
            },
        ],
    },
    // {
    //     path: '/error',
    //     title: '发生某项错误',
    //     component: '@/pages/error/index',
    // },
    {
        path: '/404',
        title: '404',
        component: '@/pages/error/index',
    },
];

export default routes;
