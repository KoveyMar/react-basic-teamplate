import { http } from '@/utils/request/http';

/**
 * @name    getDataList
 * @description 获取列表
 * @date 2021-07-06
 * @param {any} data?:any
 * @returns {any}
 */
export function getDataList(data?: any): Promise<any> {
    return http.post(`/list`);
}
