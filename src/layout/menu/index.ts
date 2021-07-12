import { RouterTypes } from '@/router/router.basic';

const menu: RouterTypes = [
    {
        path: '/',
        title: 'data-manange',
        name: '数据管理',
        routes: [
            {
                path: '/home/dataManageSource',
                title: 'data-source',
                name: '模型管理',
            },
            {
                path: '/home/dataManageTemplate',
                title: 'template',
                name: '模板管理',
            },
        ],
    },
];

export default menu;
