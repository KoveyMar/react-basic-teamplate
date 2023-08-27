import { notification } from 'antd';
import type { NotificationInstance } from 'antd/lib/notification';
import type {
    NProps,
    MsgProps,
    NormalResponseType,
    ResponseType,
} from '@/types/utils';
import { messageZH } from '@/global';

/**
 * @class
 * @description XHR 请求通知
 * @date 2021-08-20
 * @returns {AppMessage}
 */
export default class AppMessage {
    /**
     * @description 默认标题
     */
    private static message: string = '系统提示';

    /**
     * @description 提示框默认显示时间
     */
    private static duration: number | null = 3;

    /**
     * @description 提示框对象
     */
    private static Nof: NotificationInstance = notification;

    /**
     * @name    Success
     * @function
     * @description 提示成功
     * @date 2023-02-03
     * @param {ResponseType} data
     * @param {MsgProps} Args
     * @returns {void}
     */
    static Success<D extends ResponseType>(data: D, Args?: MsgProps): void {
        const { code, message: description } = data;
        const { message, duration, Nof } = this;
        const ops: NProps = {
            message,
            duration,
            description,
            ...Args,
        };
        return code === 200 ? Nof.success(ops) : void 0;
    }

    /**
     * @name    Error
     * @function
     * @description 提示错误
     * @date 2023-02-03
     * @param {ResponseType} data
     * @param {MsgProps} Args
     * @returns {void}
     */
    static Error<D extends ResponseType>(data: D, Args?: MsgProps): void {
        const { message: description, code } = data;
        const { message, duration, Nof } = this;
        return Nof.error({
            message,
            duration,
            description: `${description || messageZH[code]}`,
            ...Args,
        });
    }

    /**
     * @name    Warn
     * @function
     * @description 提示警告
     * @date 2023-02-03
     * @param {NormalResponseType} data
     * @param {MsgProps} Args
     * @returns {void}
     */
    static Warn<D extends NormalResponseType>(data: D, Args?: MsgProps): void {
        const { message: description } = data;
        const { message, duration, Nof } = this;
        return Nof.warning({
            message,
            duration,
            description,
            ...Args,
        });
    }

    /**
     * @name    Info
     * @function
     * @description 提示信息
     * @date 2023-02-03
     * @param {NormalResponseType} data
     * @param {MsgProps} Args
     * @returns {void}
     */
    static Info<D extends NormalResponseType>(data: D, Args?: MsgProps): void {
        const { message: description } = data;
        const { message, duration, Nof } = this;
        return Nof.info({
            message,
            duration,
            description,
            ...Args,
        });
    }
}
