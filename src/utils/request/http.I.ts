import { AxiosRequestConfig } from 'axios';
import { SysResponse } from '@/types/schemes';

/**
 * @description TS Http Basic
 * @date 2021-06-18
 * @param {any} url:string
 * @param {any} params?:any
 * @param {any} config?:AxiosRequestConfig
 * @returns {any}
 */
export interface HttpI {
    get<T = SysResponse>(
        url: string,
        params?: any,
        config?: AxiosRequestConfig,
    ): Promise<T>;

    post<T = SysResponse>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<T>;

    delete<T = SysResponse>(
        url: string,
        params?: any,
        config?: AxiosRequestConfig,
    ): Promise<T>;

    put<T = SysResponse>(
        url: string,
        params?: any,
        config?: AxiosRequestConfig,
    ): Promise<T>;
}
