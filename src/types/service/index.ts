import type {
    Method as AxiosMethods,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';

/**
 * @namespace   AppService
 * @description axios namesapce
 */
declare namespace AppService {
    /**
     * @description http response code
     */
    interface HttpCode {
        [code: number]: string;
    }

    /**
     * @description restful API xhr response Data Type
     */
    interface RestfulResponse<D> {
        code: number;
        success?: boolean;
        data: D;
        message: string;
    }

    /**
     * @description request
     * @description http request payload
     */
    type Payload =
        | string
        | Record<string, unknown>
        | void
        | null
        | Blob
        | FormData;

    /**
     * @description reponse
     * @description reponse Blob data
     */
    type RestBlob = Blob;

    /**
     * @description reponse
     * @description restful reponse data type
     */
    type RestData =
        | Record<string, any>
        | void
        | null
        | boolean
        | number
        | string;

    /**
     * @description reponse
     * @description restful API response data
     */
    type RestValue = RestfulResponse<RestData>;

    /**
     * @description reponse Blob
     * @description XHR response Blob Data
     */
    type AppBlobResponse = AxiosResponse<RestBlob, any>;

    /**
     * @description global response config
     * @type    {any} T Response Data Types
     * @type    {any} D Request Data Types
     */
    type AppResponse<T, D> = AxiosResponse<T, D>;

    /**
     * @description global request config
     */
    type AppRequest<P> = AxiosRequestConfig<P>;

    /**
     * @description restful return RestAPI or Blob of AxiosHeader
     */
    type RestSyntheticValue = RestValue | AppBlobResponse;

    /**
     * @description axios Http Method
     */
    type IncludeMethods =
        | 'get'
        | 'options'
        | 'post'
        | 'head'
        | 'put'
        | 'patch'
        | 'delete'
        | AxiosMethods;

    /**
     * @description API Request
     */
    type HttpRequestFunction<P> = <
        Data extends Payload,
        Params extends AppRequest<Data>,
    >(
        data?: Data,
        params?: Params,
    ) => Promise<P>;

    /**
     * @template    service FUNCTION
     * @description axios method to function
     */
    type ServiceCallback = {
        [M in IncludeMethods]: <
            T = RestfulResponse<AppService.RestData>,
            P = any,
        >(
            url: string,
            params?: P,
            config?: AppRequest<P>,
        ) => Promise<T>;
    };
}

/**
 * @exports
 */
export interface SysResponse<P = AppService.RestData>
    extends AppService.RestfulResponse<P> {}

/**
 * @exports
 */
export type SysBlobResponse = AppService.AppBlobResponse;

/**
 * @exports
 */
export type SysResponseConfig<
    T = AppService.RestSyntheticValue,
    D = AppService.Payload,
> = AppService.AppResponse<T, D>;

/**
 * @exports
 */
export type SysRequestConfig<P = AppService.Payload> = AppService.AppRequest<P>;

/**
 * @exports
 */
export type SysHttpMethod = AppService.IncludeMethods;

/**
 * @exports
 */
export type HttpRequest<U> = AppService.HttpRequestFunction<U>;

/**
 * @exports
 */
export type ServiceMethod = AppService.ServiceCallback;

/**
 * @exports
 */
export type SysRequestPayload = AppService.Payload;

/**
 * @exports
 */
export type RestSyntheticValue = AppService.RestSyntheticValue;

/**
 * @exports
 */
export type SysResponseCode = AppService.HttpCode;
