import { Action } from '@/.umi/plugin-dva/connect';

/**
 * @description xhr response Data Type
 */
export interface SysResponse {
    code: number;
    success?: boolean;
    data: any;
    message: string;
}

/**
 * @description 解决 TS 中 Action 提交类dispacth数据对线,但不能识别 payload 等 dispacth 参数
 */
export interface ActPayLoad<T, P = any> extends Action<T> {
    payload?: P;
}
