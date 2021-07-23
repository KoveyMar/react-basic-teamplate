import React, { Context } from 'react';
import { RenderNode } from '@/types';

/**
 * @description React Context By T
 * @date 2021-05-28
 * @returns {any}
 */
type T = RenderNode | any;

const ChildContext: Context<T> = React.createContext<T>(null);

export default ChildContext;
