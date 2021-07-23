import { RouterTypes } from '@/router/router.basic';

const menu: RouterTypes = [
    {
        path: '/',
        title: 'data-manange',
        name: '数据管理',
        routes: [
            {
                path: '/home/dataManageTemplate',
                title: 'template',
                name: '模板管理',
            },
            {
                path: '/home/dataManageSource',
                title: 'dataModel',
                name: '模型管理',
            },
        ],
    },
    {
        path: '/',
        title: 'system-manange',
        name: '系统管理',
        routes: [
            {
                path: '/home/service',
                title: 'service',
                name: '服务',
            },
            {
                path: '/home/system',
                title: 'system',
                name: '系统',
            },
            {
                path: '/home/role',
                title: 'role',
                name: '角色',
            },
        ],
    },
];

export default menu;
