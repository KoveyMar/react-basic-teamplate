import axios from 'axios';
import type { AxiosError } from 'axios';
import { BASE_URL as baseURL } from '@/global';
import {
    responseHandleError,
    useRequestEffect,
    useResponseEffect,
} from './http.u';

/**
 * @description axios
 */
const service = axios.create({
    baseURL,
    timeout: 20e3,
});

/**
 * @description    axios request
 * @returns {Promise<SysRequestConfig>}
 */
service.interceptors.request.use(
    async (axiosRequestConfig) => {
        /**
         * @description axios request effect
         */
        useRequestEffect(axiosRequestConfig);
        return axiosRequestConfig;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

/**
 * axios response
 * @description  config has 'X-Blob' in parameters of headers, has been return axiosResponse, download Blob file
 * @returns {Promise<AppService.RestValue>}
 */
service.interceptors.response.use(
    async (axiosResponse) => {
        /**
         * @description axios response effect
         */
        useResponseEffect(axiosResponse);
        return axiosResponse.config.headers!['X-Blob']
            ? axiosResponse
            : axiosResponse.data;
    },
    (error: AxiosError) => {
        try {
            responseHandleError(error);
        } catch (e: any) {
            console.error(e);
        } finally {
            return Promise.reject(error);
        }
    },
);

export default service;
