import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { notification } from 'antd';
import { messageZH } from '@/global/http.status';

/**
 * @description axios
 */
const service: AxiosInstance = axios.create({
    baseURL: '/',
    timeout: 6e3,
});

/**
 * @description 服务响应错误的回调
 * @date 2021-06-18
 * @param {any} status:number
 * @param {any} cb?:Function
 * @returns {any}
 */
//TODO
const responseError = (status: number, cb?: Function): void => {
    messageZH[status];
};

/**
 * @description    axios request
 */
service.interceptors.request.use(
    (axiosRequestConfig: AxiosRequestConfig) => {
        return axiosRequestConfig;
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

/**
 * @description   axios response
 */
service.interceptors.response.use(
    (axiosResponse: AxiosResponse) => {
        if (
            axiosResponse.data.hasOwnProperty('success') &&
            axiosResponse.data.success === false
        ) {
            notification.error({
                message: '系统提示',
                description: axiosResponse.data.message,
            });
        }
        return axiosResponse.config.headers['X-Blob']
            ? axiosResponse
            : axiosResponse.data;
    },
    (error: any) => {
        const ErrStat = error.response.status;
        responseError(ErrStat);
        return Promise.reject(error);
    },
);

export default service;
