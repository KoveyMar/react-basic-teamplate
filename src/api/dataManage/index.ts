import http from '@/utils/request/http';

const scope_base_url: string = '';

/**
 * @name    getDataList
 * @description get Data
 * @date 2021-07-06
 * @param {any} data?:any
 * @returns {any}
 */
export function getDataList<Q = any, P = any, R = any>(
    data?: Q,
    params?: P,
): Promise<R> {
    return http.get(`${scope_base_url}/feature_preview/indicator_check`, data, {
        params,
    });
}
