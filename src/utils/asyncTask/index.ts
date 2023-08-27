import type { SysHttpMethod, SysResponse } from '@/types';
import { AppHttp } from '..';

/**
 * @description 处理多个XHR任务
 * @date 2021-10-19
 * @param {Array<Promise<any>>} task
 * @returns {Promise<any[]>}   Array
 */
export async function asyncTask(task: Array<Promise<any>>): Promise<any[]> {
    return Promise.all(task)
        .then((result: Array<SysResponse>) => {
            const data: any[] = result.map((res: SysResponse) =>
                res.code === 200 ? res.data : [],
            );
            return Promise.resolve(data);
        })
        .catch(() => Promise.reject(null));
}

/**
 * @description 以任意请求方式获取数据
 * @date 2022-12-13
 * @param {SysHttpMethod} method
 * @param {string} url
 * @param {any} params
 * @returns {Promise<SysResponse>}
 */
export function requestData<T = any, D = any>(
    method: SysHttpMethod,
    url: string,
    params?: D,
): Promise<SysResponse<T>> {
    return (AppHttp as any)[method](url, params);
}
