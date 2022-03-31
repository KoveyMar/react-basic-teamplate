import { AxiosRequestConfig } from 'axios';
import { SysResponse } from '@/types/schemes';

/**
 * @description TS Http Basic
 * @date 2021-06-18
 * @param {string} url:string
 * @param {any} params?:any
 * @param {any} config?:AxiosRequestConfig
 * @returns {any}
 */
export default interface HttpI {
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

    options<T = SysResponse>(
        url: string,
        params?: any,
        config?: AxiosRequestConfig,
    ): Promise<T>;

    head<T = SysResponse>(
        url: string,
        params?: any,
        config?: AxiosRequestConfig,
    ): Promise<T>;

    patch<T = SysResponse>(
        url: string,
        params?: any,
        config?: AxiosRequestConfig,
    ): Promise<T>;
}
