import { IConfigFromPlugins } from '@@/core/pluginConfig';

export interface RouterTypes extends IConfigFromPlugins {}

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
        routes: [
            {
                path: '/service',
                title: '服务',
                component: '@/pages/service/index',
                exact: true,
            },
            {
                path: '/system',
                title: '系统',
                component: '@/pages/system/index',
                exact: true,
            },
        ],
    },
];

export default routes;
