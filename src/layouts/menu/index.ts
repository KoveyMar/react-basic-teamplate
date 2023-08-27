import type { RouterTypes } from '@/types/router';
// import { LocalStore } from '@/utils';
// import './menu.u';

const menu: Array<RouterTypes> = [
    {
        title: 'simulation',
        name: '管理',
        routes: [
            {
                path: '/home',
                title: 'simulationIns',
                name: '播放',
            },
        ],
    },
    {
        title: 'task-type',
        name: '测试',
        routes: [
            {
                path: '/home/test',
                title: 'classify',
                name: '测试管理',
            },
        ],
    },
    // {
    //     title: 'model-view',
    //     name: '模型',
    //     // routes: LocalStore.getStore('menu')
    // }
];

export default menu;
