import { notification } from 'antd';
import { messageZH } from '@/global';
import { SysResponse } from '@/types';

/**
 * @description 服务响应错误的回调
 * @date 2021-06-18
 * @param {any} status:number
 * @param {any} cb?:Function
 * @returns {any}
 */
export function responseError(status: number, cb?: Function): void {
    const message = messageZH[status];
    notification.error({
        message: '系统提示',
        description: message || '系统发生错误',
    });
    cb && cb();
}

/**
 * @description 服务器响应统一调用通知
 * @date 2022-04-01
 * @param {any} response:SysResponse
 * @returns {any}
 */
export function AppNotifaction(response: SysResponse): void {
    const { code, message: description } = response;
    return code === 200
        ? notification.success({ message: '系统提示', description })
        : void 0;
}
