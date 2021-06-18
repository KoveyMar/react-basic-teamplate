import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { notification } from 'antd';

type code = {
    [code: number]: string;
};

const codeMessage: code = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '该用户没有权限。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

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
    codeMessage[status];
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
