import { AxiosRequestConfig } from 'axios';
import { SysResponse } from '@/types/schemes';
import { HttpI } from './http.I';
import service from './service';

/**
 * @description HTTP XHR request template
 */
class Http implements HttpI {
    get<T = SysResponse>(
        url: string,
        params?: any,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        return service.get(url, { params, ...config });
    }

    post<T = SysResponse>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        return service.post(url, data, config);
    }

    put<T = SysResponse>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        return service.put(url, data, config);
    }

    delete<T = SysResponse>(
        url: string,
        params?: any,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        return service.delete(url, { params, ...config });
    }
}

export const http = new Http();
