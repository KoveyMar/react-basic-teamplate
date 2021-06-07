import React, { Context, ReactNode } from 'react';

/**
 * @description 获取子路由页面
 * @date 2021-05-28
 * @returns {any}
 */
const ChildContext: Context<ReactNode> = React.createContext<ReactNode>(null);

export default ChildContext;
