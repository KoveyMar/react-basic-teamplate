# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

项目内包含基于vscode的启动配置项

```bash
Run Start - 启动项目

Run Build - 构建项目

Run YarnInstall - yarn install

Run PnpmInstall - pnpm install
```

## Project

### React Template

* Umi 3.X

* TypeScript 5.x

* Ant-Design 4.x

* React 18.x


基于UMI构建的react 项目基础模板

* pages 模块统一使用.tsx

        index.tsx

* js 模块统一使用.ts

        index.ts

* umi 内置 dva,引用

        import { Models } from 'dva';

* 建议使用 Hooks 进行开发

        import { useState, useDispatch, useReducer, useSelector } from 'react';

* 登陆账号密码

        admin
        12345

### Project DIR

* public 存放外部引用文件

* mock 调用UmiJS的mock模块进行模拟数据

* src
        
    
    1.api 
            前端工程统一存放后台接口地址目录，按照一个模块一个index文件的形式，例：
classify模块接口，定义classifyApi.ts

        import { http } from '@/utils';
        import { SysResponse } from '@/types';

        const scope_base_url: string = `/classify`;

        export function getTreeNode<T = SysResponse>(): Promise<T> {
                return http.get(`${scope_base_url}/getTreeNode`);
        };

    2.assets
            存放第三方JS，CSS，img

    3.components
            项目的公共组件位置

        - table
                列表组件，使用见   template 目录 table.tsx

        - modal
                弹窗组件，使用见   template 目录 modal.tsx

        - form
                表单配置项组件

        - pages
                项目业务类型公共组件存放位置

        - loading
                页面加载统一调用loading

    4.context
            React Context

    5.global
            项目全局配置参数

    6.laytous
            项目页面整体布局
        
    7.models
            Umi使用dvaJS，按UmiJS开发规范，一个文件对应一个模块，在页面使用 connect 或 Hooks 进行使用

    8.pages
            项目页面位置，按照下列关系存放

            - classify
                -  comp
                index.tsx
                
            其中 classify是当前页面文件名，index.tsx是页面展示路由页，comp放置该路由页下的子页面，子组件等
        
    9.router
    
    项目路由配置

    10.style
    
    style 样式，使用 less

    11.template

        - class.tsx
    
                class 模板页面

        - FC.tsx
    
                Hooks 模板页面
                
        - modal.tsx
                
                使用modal组件，并且使用hooks的弹窗模板页面
                
        - models.ts

                dvaJS模块模板
                
        - table.tsx

                使用 TableList 组件，并且使用hooks的列表模板页面


    12.types

    TypeScript的数据描述

    13.utils

        - AppMessage
                
                基于 antd UI  notification组件封装的提示信息框，使用

                import { AppMessage } from '@/utils';

                // 提示成功
                AppMessage.Success(respones: SysResponse, Args?: Partial<ArgsProps>);

                // 提示错误
                AppMessage.Error(respones: SysResponse, Args?: Partial<ArgsProps>);

                // 提示警告
                AppMessage.Warn(respones: SysResponse, Args?: Partial<ArgsProps>);
        
        - AppQueue

                数据结构-队列
                interface QueueMapper<T = any> {
                        queue: Array<T>;

                        get size(): number;

                        get getAll(): Array<T>;

                        setList: (data: any[]) => void;

                        getFirstItem: () => any;

                        append: (data: any) => number;

                        prepend: (data: any) => number;

                        getLastItem: () => any;

                        removeByKey: (key: string, value: string) => void;

                        removeByIndex: (index: number) => void;


                        updateByIndex: (index: number, item?: any) => void;

                        clearAll: () => void;
                }
        
        - AppRequest

                基于axios 封装的xhr请求，见 1.api

        - AppSocket

                WebSocket 的组件封装，使用
                
                import { AppSocket } from '@/utils';
                import { WS_BASE_URL } from '@/global';

                const options = {
                        /*
                        * @description ws 地址，ws开头或者wss开头的地址，可在 /global/socket 下进行全局配置
                        */
                        url: WS_BASE_URL,
                        // @description (（可选）
                        protocols: ''，
                        /*
                        * @description (可选) ws接收数据的回调函数
                        * @param {any} data 当前接收的数据
                        * @param {any[]} ws接收的所有数据
                        * /
                        message: (data: any, msg: any[]) => {}
                        /*
                        * @description (可选) ws是否显示信息提示框
                        * 默认 false
                        */
                        isNotifaction: false,
                        /*
                        * @description (可选) ws发生错误自动重连次数，范围 1 - 5
                        * 默认最大 5
                        */
                        reConnectNum: 5,
                        /*
                        * @description ((可选) ws接收数据是否倒序排列
                        * 默认 false
                        */
                        dataReverse: false
                };

                const socket = new AppSocket(options);

                /*
                * @function <T = any>(data: any) => Promise<T>;
                * @naqme sendData
                * @description 发送数据调用方法
                * @param {any} data 要发送的数据
                * @returns {Promise}
                */
                const sendMsg = 'test'
                socket.sendData(sendMsg);

                /*
                * @function () => Promise<any>
                * @description 手动关闭ws连接
                * @returns {Promise}
                */
                socket.closeSocket();

        - AppStorage

                LocalStorage 与 SessionStorage 的封装函数，基于 StorageMapper 实现，使用

                import { LocalStore, SessionStore } from '@/utils';

                interface StorageMapper {
                        store: Storage | any;

                        get keys(): (KeyString: string[]) => any[];

                        setStore<K extends string, V = JSON | string | void>(
                                key: K,
                                value: V,
                        ): void;

                        getStore<K extends string>(key: K): string | null;

                        removeStore<K extends string>(key: K): void;

                        clearStore(): void;
                }

                

