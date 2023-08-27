import axios from 'axios';
import type { HttpRequest, SysRequestConfig } from '@/types';
import type {
    InjectValues,
    // InjectFunction as InjectAbort,
} from '@/types/service/abort';

/**
 * @description axios 取消请求注入
 * @date 2021-10-15
 * @param   {AbortCancel['request']}    request
 * @param   {any | void}    data
 * @param   {SysRequestConfig}  config
 * @returns {InjectValues}
 */
/**
 *
 * @template
 * import { InjectAbort } from '@/utils/AppRequest/Abort';
 * import { api } from '@/api';
 * const [request, cancel] = InjectAbort(api, data, params);
 */
export function InjectAbort<
    T,
    Data = any | void,
    Config extends SysRequestConfig = {},
>(request: HttpRequest<T>, data?: Data, config?: Config): InjectValues<T> {
    const { cancel, token } = axios.CancelToken.source();

    function fn(): Promise<T> {
        return request.call(new Function(), data as any, {
            ...config,
            cancelToken: token,
        });
    }

    return [fn, cancel];
}
