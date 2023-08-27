import type { ServiceMethod, SysRequestConfig, SysResponse } from '@/types';

/**
 * @function
 * @description () => Promise
 * @date 2021-06-18
 * @param {string} url
 * @param {any} params
 * @param {SysRequestConfig} config
 * @returns {Promise<SysResponse>}
 */

/**
 * @description HttpLowerCase
 * @type    {ServiceMethod} options
 * @type    {ServiceMethod} head
 */
interface HttpLowerCase extends Pick<ServiceMethod, 'options' | 'head'> {
    options<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;

    head<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;
}

/**
 * @description HttpImplict
 * @type    {ServiceMethod} patch
 */
interface HttpImplict extends Pick<ServiceMethod, 'patch'> {
    patch<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;
}

/**
 * @description HttpGeneralMapper
 * @type    {ServiceMethod} get
 * @type    {ServiceMethod} post
 * @type    {ServiceMethod} delete
 * @type    {ServiceMethod} put
 */
interface HttpGeneralMapper
    extends Pick<ServiceMethod, 'get' | 'post' | 'delete' | 'put'> {
    get<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;

    post<T = SysResponse, P = any>(
        url: string,
        data?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;

    delete<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;

    put<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;
}

/**
 * @description HttpForm, set header content-type is 'multipart/form-data'
 */
interface HttpForm {
    postForm<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;

    putForm<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;

    patchForm<T = SysResponse, P = any>(
        url: string,
        params?: P,
        config?: SysRequestConfig<P>,
    ): Promise<T>;
}

export default interface HttpMapper
    extends HttpForm,
        HttpLowerCase,
        HttpImplict,
        HttpGeneralMapper {}
