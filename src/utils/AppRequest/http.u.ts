import axios, { AxiosError as AxiosErrorIns } from 'axios';
import type { AxiosError } from 'axios';
import { APP_TOKEN, messageZH } from '@/global';
import { AppMessage, LocalStore } from '@/utils';
import type { SysRequestConfig, SysResponse, SysResponseConfig } from '@/types';

/**
 * @name    responseHandleError
 * @description 服务响应错误的回调
 * @date 2021-06-18
 * @param {AxiosError} error
 * @returns {void}
 */
export function responseHandleError(error: AxiosError): void {
    if (axios.isCancel(error)) return;
    const _ErrIns = AxiosErrorIns.from(error);
    let message: string = '服务器异常,请求失败';
    const { name, code, config, message: errMsg } = _ErrIns;
    if (_ErrIns.response) {
        const status = _ErrIns.status;
        message = `${status} - ${messageZH[status ?? 500]}`;
    }
    AppMessage.Error({ code: 500, message });
    throw new Error(
        `${name} - request path '${config?.baseURL}${config?.url}' is [${code}], reason [${errMsg}]`,
    );
}

/**
 * @name    useRequestEffect
 * @description Axios Request Service Effect
 * @param {SysRequestConfig} config
 * @returns {void}
 */
export function useRequestEffect(config: SysRequestConfig): void {
    /**
     * @description token in parmas of headers
     */
    const token = LocalStore.getStore(APP_TOKEN);
    if (token) {
        config.headers!['X-Access-Token'] = token;
    }
}

/**
 * @name    useResponseEffect
 * @description Axios Response Service Effect
 * @param {SysResponseConfig<SysResponse>} response
 * @returns {void}
 */
export function useResponseEffect(
    response: SysResponseConfig<SysResponse>,
): void {
    /**
     * @description reponse http status error onto messgae
     */
    const _Data = response.data;
    if (_Data.hasOwnProperty('code') && _Data.code !== 200) {
        AppMessage.Error(_Data);
    }
}
