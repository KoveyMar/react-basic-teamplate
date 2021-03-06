/**
 * @description 由于采用定义 router, src/layouts 约定弃用
 *
 */
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
        // title: '登录',
        name: '登录',
        exact: true,
        component: '@/pages/login/index',
    },
    {
        path: '/home',
        component: '@/pages/index',
        wrappers,
        name: '首页',
        // exact: true,
        routes: [
            {
                path: '/',
                name: '数据管理',
                routes: [
                    {
                        path: '/home/dataManageTemplate',
                        component: '@/pages/dataManage/template/index',
                        name: '模板管理',
                        exact: true,
                    },
                    // {
                    //     path: '/home/dataManageTemplate/create',
                    //     component: '@/pages/dataManage/template/createTemplate',
                    //     name: '新增模板',
                    //     exact: true,
                    // },
                    {
                        path: '/home/dataManageSource',
                        component: '@/pages/dataManage/dataModel/index',
                        name: '模型管理',
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
