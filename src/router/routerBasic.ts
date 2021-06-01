import { IConfigFromPlugins } from '@@/core/pluginConfig';

export interface RouterTypes extends IConfigFromPlugins {
    isRender?: boolean;
}

const routes: Array<RouterTypes> = [
    // {
    //     path: '/',
    // },
    {
        path: '/',
        // path: '/login',
        title: '登录',
        component: '@/pages/login/index',
    },
    {
        path: '/home',
        title: '首页',
        component: '@/pages/index',
        // exact: true,
        routes: [
            {
                path: '/home/service',
                title: '服务',
                component: '@/pages/service/index',
                exact: true,
            },
            {
                path: '/home/system',
                title: '系统',
                component: '@/pages/system/index',
                exact: true,
            },
            {
                path: '/home/role',
                title: '角色',
                component: '@/pages/role/index',
                exact: true,
            },
        ],
    },
];

export default routes;
