import { IConfigFromPlugins } from '@@/core/pluginConfig';

export interface RouterTypes extends IConfigFromPlugins {
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
        name: '登录',
        exact: true,
        component: '@/pages/login/index',
    },
    {
        path: '/home',
        component: '@/pages/index',
        wrappers,
        name: '首页',
        exact: true,
        routes: [
            {
                path: '/',
                name: '数据管理',
                routes: [],
            },
            {
                path: '/',
                name: '系统管理',
                routes: [
                    {
                        path: '/home/service',
                        component: '@/pages/service/index',
                        name: '服务',
                        exact: true,
                    },
                    {
                        path: '/home/system',
                        component: '@/pages/system/index',
                        name: '系统',
                        exact: true,
                    },
                    {
                        path: '/home/role',
                        component: '@/pages/role/index',
                        name: '角色',
                        exact: true,
                    },
                ],
            },
        ],
    },
    {
        path: '/404',
        title: '404',
        component: '@/pages/error/index',
    },
];

export default routes;
