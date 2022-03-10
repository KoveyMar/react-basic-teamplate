import { notification } from 'antd';
// import { history } from 'umi';
import { messageZH } from '@/global';

/**
 * @description 服务响应错误的回调
 * @date 2021-06-18
 * @param {any} status:number
 * @param {any} cb?:Function
 * @returns {any}
 */
export const responseError = (status: number, cb?: Function): void => {
    const message = messageZH[status];
    if (status >= 500) {
        notification.error({
            message: '系统提示',
            description: message,
        });
    }
};
