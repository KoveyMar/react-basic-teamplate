/**
 * @description WebSocket Constructor
 * @type    {string}    url ws链接地址
 * @type    {string | string[]}
 * @type    {(newData: any, dataQueue: any[]) => void}  message callback
 * @type    {boolean}   isNotifaction   是否开启消息通知
 */
export interface WSProps {
    url: string;
    protocols?: string | string[];
    message?: (newData: any, dataQueue: any[]) => void;
    isNotifaction?: boolean;
    reConnectNum?: number;
    dataReverse?: boolean;
}

/**
 * @description AppConsole Props
 */
export interface LogProps {
    title: string;
}

/**
 * @description AppConsole对象
 */
export interface LogMapper<M = string | unknown> {
    log: (message: M) => void;

    warn: (message: M) => void;

    err: (message: M) => void;
}

/**
 * @description WebSocket Mapper
 * @type    {string} url ws链接地址
 * @type    {string | string[]} protocols
 * @type    {WebSocket} socket对象
 * @type    {QueueMapper}   queue 消息数据队列
 * @type    {number}    WebSocket连接状态
 * @type    {boolean}   dataReverse 消息队列是否反向存储
 * @type    {boolean}   isNotifaction 是否开启新消息提示框
 * @type    {number}    reConnectNum    断线重连次数
 */
export default interface BasicSocketMapper {
    // url: string;

    // protocols: string | string[];

    // socket: WebSocket;

    // queue: QueueMapper;

    // status: number;

    // dataReverse: boolean;

    // isNotifaction: boolean;

    // reConnectNum: number;

    // log: any;

    // init: () => void;

    // onClose: () => void;

    // onError: () => void;

    // onConnect: () => void;

    // onMessage: () => void;

    sendData: <T = any, M = any>(data: M) => Promise<T>;

    closeSocket: () => Promise<any>;
}
