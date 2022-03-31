import { Context, createContext } from 'react';
import { RenderNode } from '@/types';

/**
 * @description React Context By T
 * @date 2021-05-28
 * @returns {any}
 */
type T = RenderNode | any;

const ChildContext: Context<T> = createContext<T>(null);

export default ChildContext;
