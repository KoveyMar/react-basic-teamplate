import type { SysResponseCode } from '@/types';

export const messageZH: SysResponseCode = {
    200: '请求成功',
    201: '新的请求资源已创建',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    304: '请求无变化',
    400: '请求参数格式有误',
    401: '该用户无权限访问',
    403: '请求的资源禁止访问',
    404: '请求路径有误，该资源不存在',
    405: '请求方式有误',
    406: '请求的格式不可得',
    413: '请求的链接过长',
    415: '请求参数流文件有误',
    500: '服务发生错误',
    502: '服务错误',
    503: '服务不可用',
    504: '服务超时',
};

export const messageEN: SysResponseCode = {
    200: 'The request has succeeded',
    201: 'The request has succeeded and a new resource has been created as a result',
    202: 'The request has been received but not yet acted upon',
    203: 'This response code means the returned meta-information is not exactly the same as is available from the origin server',
    204: 'There is no content to send for this request',
    304: 'The source is Not Modified',
    400: 'The server could not understand the request due to invalid syntax',
    401: 'The request is Unauthorized',
    403: 'The request is Forbidden',
    404: 'The Source Is Not Found',
    405: 'The reuqest method Not Allowed',
    406: 'The request Not Acceptable',
    413: 'The URI Too Long',
    415: 'The request params is not allowed',
    500: `The server has encountered a situation it doesn't know how to handle`,
    502: 'The response Bad Gateway',
    503: 'The Service Unavailable',
    504: 'The Gateway Timeout',
};

export default {
    'en-US': messageEN,
    'zh-CN': messageZH,
};
