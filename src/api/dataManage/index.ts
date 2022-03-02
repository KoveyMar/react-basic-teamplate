import { http } from '@/utils/request/http';

/**
 * @name    getDataList
 * @description 获取列表
 * @date 2021-07-06
 * @param {any} data?:any
 * @returns {any}
 */
export function getDataList<Q = any, P = any, R = any>(
    data: Q,
    params: P,
): Promise<R> {
    return http.get(`/data/source/drPackageList`, data);
}
