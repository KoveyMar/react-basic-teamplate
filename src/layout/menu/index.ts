import { RouterTypes } from '@/router/router.basic';

const menu: RouterTypes = [
    {
        path: '/home',
        title: 'Home',
        routes: [
            {
                path: '/home/service',
                title: 'Service',
            },
            {
                path: '/home/system',
                title: 'System',
            },
            {
                path: '/home/role',
                title: 'Role',
            },
        ],
    },
];

export default menu;
