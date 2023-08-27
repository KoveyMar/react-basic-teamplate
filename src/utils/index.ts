export * from './date.utils';
export * from './string.utils';
export * from './randomValue';
export * from './asyncTask';
export * from './download';
export * from './AppStorage';
export { default as AppSocket } from './AppSocket';
export { default as AppMessage } from './AppMessage';
export { default as AppQueue } from './AppQueue';
export { default as AppHttp } from './AppRequest/http';

/**
 * @description 返回当前浏览器界面宽高
 * @date 2021-10-26
 * @returns {{ width: number, height: number }}
 */
export function getAvaliScreen(): { width: number; height: number } {
    const body: HTMLElement = window.document.body;
    return { height: body.clientHeight, width: body.clientWidth };
}

/**
 * @description 获取当前服务器host
 * @date 2022-01-06
 * @returns {string}
 */
export function getLocalHost(): string {
    return window.location.host;
}

/**
 * @function
 * @name    getObjectProto
 * @description prototype 原型比对
 * @date 2023-02-02
 * @param {any} obj
 * @param {string} type
 * @returns {boolean}
 */
export function getObjectProto<T>(obj: T, type: string): boolean {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
}
