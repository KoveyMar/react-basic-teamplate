import type { Canceler } from 'axios';
import type {
    HttpRequest,
    RestSyntheticValue,
    SysRequestConfig,
    SysRequestPayload,
} from '.';

/**
 * @namespace
 * @description Abort Controller
 */
declare namespace AbortController {
    /**
     * @description Cancel Controller
     */
    type Cancel = Canceler;

    /**
     * @description Inject Function Return Value
     */
    type InjectValues<T> = [() => Promise<T>, Cancel];

    /**
     * @function
     * @description Inject Abort Function
     * @param {AppRequest} appRequest
     * @param {?AppService.Payload} data
     * @param {?AppService.AppRequest} params
     * @returns {InjectValues}
     */
    function InjectAbort<
        T extends RestSyntheticValue,
        Data extends SysRequestPayload,
        Config extends SysRequestConfig<Data>,
    >(
        appRequest: HttpRequest<T>,
        data?: Data,
        params?: Config,
    ): InjectValues<T>;
}

/**
 * @exports
 */
export type InjectValues<T> = AbortController.InjectValues<T>;

/**
 * @exports
 */
export type InjectFunction = typeof AbortController.InjectAbort;
