import { createContext } from 'react';
import type { Context } from 'react';
import type { RenderNode } from '@/types';

/**
 * @description React Context By T
 * @date 2021-05-28
 * @returns {any}
 */
type T = RenderNode;

const ChildContext: Context<T> = createContext<T>(null);

export default ChildContext;
