import React, { ComponentClass, Context, FC, ReactNode } from 'react';

/**
 * @description React Context By T
 * @date 2021-05-28
 * @returns {any}
 */
type T = ReactNode | FC | ComponentClass | any;

const ChildContext: Context<T> = React.createContext<T>(null);

export default ChildContext;
