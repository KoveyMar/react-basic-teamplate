import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { notification } from 'antd';
import { BASE_URL as baseURL } from '@/global';
import { responseError } from './http.u';
import { LocalStore } from '@/utils/storage';

/**
 * @description axios
 */
const service: AxiosInstance = axios.create({
    baseURL,
    timeout: 6e4,
});

/**
 * @description    axios request
 */
service.interceptors.request.use(
    (axiosRequestConfig: AxiosRequestConfig) => {
        const token = LocalStore.getStore('token');
        if (token) {
            axiosRequestConfig.headers['X-Access-Token'] = token;
        }
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
        try {
            const ErrStat = error.response.status;
            responseError(ErrStat);
        } catch (e) {
            console.error(e);
        }
        return Promise.reject(error);
    },
);

export default service;
