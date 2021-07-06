import { IConfigFromPlugins } from '@@/core/pluginConfig';

export interface RouterTypes extends IConfigFromPlugins {
    isMenu?: boolean;
    name?: string;
}

const wrappers: string[] = ['@/router/router.auth'];

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
        wrappers,
        isMenu: !0,
        name: '首页',
        routes: [
            {
                path: '/home/service',
                component: '@/pages/service/index',
                isMenu: !0,
                name: '服务',
                exact: true,
            },
            {
                path: '/home/system',
                component: '@/pages/system/index',
                isMenu: !0,
                name: '系统',
                exact: true,
            },
            {
                path: '/home/role',
                component: '@/pages/role/index',
                isMenu: !0,
                name: '角色',
                exact: true,
            },
        ],
    },
    {
        path: '/dataManage',
        name: '数据管理',
        wrappers,
        isMenu: !0,
    },
    {
        path: '/404',
        title: '404',
        component: '@/pages/error/index',
    },
];

export default routes;
