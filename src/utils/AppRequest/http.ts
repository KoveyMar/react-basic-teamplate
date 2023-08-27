import type { SysRequestConfig, SysResponse } from '@/types';
import type { HttpMapper } from '@/types/mapper';
import service from './service';

/**
 * @class
 * @description HTTP XHR request template
 * @returns {HttpMapper}
 */
class Http implements HttpMapper {
    get<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T> {
        return service.get<P, T, P>(url, { params, ...config });
    }

    delete<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T> {
        return service.delete<P, T, P>(url, { params, ...config });
    }

    options<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T> {
        return service.options<P, T, P>(url, { params, ...config });
    }

    head<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T> {
        return service.head<P, T, P>(url, { params, ...config });
    }

    post<T = SysResponse, D = any>(
        url: string,
        data?: D,
        config?: SysRequestConfig<D>,
    ): Promise<T> {
        return service.post<T, T, D>(url, data, config);
    }

    put<T = SysResponse, D = any>(
        url: string,
        data?: D,
        config?: SysRequestConfig<D>,
    ): Promise<T> {
        return service.put<T, T, D>(url, data, config);
    }

    patch<T = SysResponse, D = any>(
        url: string,
        data?: D,
        config?: SysRequestConfig<D>,
    ): Promise<T> {
        return service.patch<T, T, D>(url, data, config);
    }

    putForm<T = SysResponse, D = any>(
        url: string,
        data?: D,
        config?: SysRequestConfig<D>,
    ): Promise<T> {
        return service.putForm<T, T, D>(url, data, config);
    }

    patchForm<T = SysResponse, D = any>(
        url: string,
        data?: D,
        config?: SysRequestConfig<D>,
    ): Promise<T> {
        return service.patchForm<T, T, D>(url, data, config);
    }

    postForm<T = SysResponse, D = any>(
        url: string,
        data?: D,
        config?: SysRequestConfig<D>,
    ): Promise<T> {
        return service.postForm<T, T, D>(url, data, config);
    }
}

export default new Http();
