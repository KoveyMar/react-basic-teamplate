import { AppHttp } from '@/utils';
import type { SysBlobResponse, SysResponse } from '@/types';

const scope_base_url: string = `/test`;

/**
 * @name    getList
 * @description XXXX
 * @date YYYY
 * @returns {Promise<T>}
 */
export function getList<T extends SysResponse, Q = Record<string, unknown>>(
    data: Q,
    params: any,
): Promise<T> {
    return AppHttp.get<T, Q>(`${scope_base_url}/list`, data, params);
}
