import type { BasicSocketMapper, QueueMapper } from '@/types/mapper';
import type { LogMapper, WSProps } from '@/types/mapper/webSocket.I';
import { AppQueue as Q, AppMessage } from '..';
import AppLog from './AppLog';

function ErrorMsg<T extends string>(description: T): void {
    AppMessage.Error({ message: description, code: 500 });
}

function SucMsg<T extends string>(description: T): void {
    AppMessage.Success({ message: description, code: 200 });
}

/**
 * @name    AppSocket
 * @class
 * @template    WebSocket
 * @returns {AppSocket}
 */
export default class AppSocket implements BasicSocketMapper {
    constructor(props: WSProps) {
        try {
            this.queue = new Q();
            this.log = new AppLog({ title: '[WebSocket Info]' });
            this.initVals(props);
            this.createSocket();
            this.initEventListener();
        } catch (e: any) {
            this.log.err(e);
        }
    }

    protected static connectNumber = 5;

    protected status: number = -1;

    protected socket: WebSocket = null as any;

    protected queue: QueueMapper = null as any;

    protected log: LogMapper<string> = null as any;

    private url: string = '';

    private protocols: string | string[] = [];

    /**
     * @default Function
     */
    private message: Function = new Function();

    /**
     * @description 1 to 5
     * @default 5
     */
    private reConnectNum: number = 5;

    /**
     * @default !1
     */
    private dataReverse: boolean = !1;

    /**
     * @default !1
     */
    private isNotifaction: boolean = !1;

    private initEventListener(): void {
        this.openHandle();
        this.closeHandle();
        this.errorHandle();
        this.getMessageHandle();
    }

    /**
     * @description
     * @date 2023-02-02
     * @returns {void}
     */
    private createSocket(): void {
        this.socket = new WebSocket(this.url, this.protocols);
        this.status = this.socket.CONNECTING;
    }

    /**
     * @description new 获取参数
     * @date 2023-02-02
     * @param {WSProps} params
     * @returns {void}
     */
    private initVals(params: WSProps): void {
        const {
            url,
            protocols,
            message,
            isNotifaction,
            reConnectNum,
            dataReverse,
        } = params;
        this.url = url;
        this.protocols = protocols || this.protocols;
        this.message = message || this.message;
        this.isNotifaction = isNotifaction ?? this.isNotifaction;
        this.dataReverse = dataReverse ?? this.dataReverse;
        this.reConnectNum =
            reConnectNum && reConnectNum < AppSocket.connectNumber
                ? reConnectNum
                : AppSocket.connectNumber;
    }

    /**
     * @description 连接成功
     * @date 2021-11-01
     * @returns {void}
     */
    private openHandle(): void {
        this.socket.onopen = () => {
            this.status = this.socket.OPEN;
            this.reConnectNum = AppSocket.connectNumber;
            this.isNotifaction && SucMsg('已连接');
            this.log.warn('已连接');
        };
    }

    /**
     * @description 收到数据
     * @date 2021-11-01
     * @returns {void}
     */
    private getMessageHandle(): void {
        this.socket.onmessage = (e: any) => {
            const m = e.data;
            this.isNotifaction && SucMsg(`收到新消息-${m}`);
            this.log.log(`收到新消息-${m}`);
            this.dataReverse ? this.queue.prepend(m) : this.queue.append(m);
            this.message(m, this.queue.getAll);
        };
    }

    /**
     * @description 错误
     * @date 2021-11-01
     * @returns {void}
     */
    private errorHandle(): void {
        this.socket.onerror = () => {
            this.onReConnect();
            this.status = this.socket.CLOSING;
            this.isNotifaction && ErrorMsg('连接发生错误');
            this.log.err('连接发生错误');
        };
    }

    /**
     * @description 关闭监听
     * @date 2021-11-01
     * @returns {void}
     */
    private closeHandle(): void {
        this.socket.onclose = () => {
            this.status = this.socket.CLOSED;
            this.isNotifaction && ErrorMsg('WebSocket 连接中断,正在关闭');
            this.log.warn('连接正在关闭');
        };
    }

    /**
     * @description
     * @date 2023-02-02
     * @returns {void}
     */
    private onReConnect(): void {
        if (this.status === -1) return;
        let number = this.reConnectNum;
        if (number < AppSocket.connectNumber) {
            number--;
            this.log.warn(
                `第 ${AppSocket.connectNumber - number} 次,正在重新建立连接`,
            );
            this.reConnectNum = number;
            this.createSocket();
        }
    }

    /**
     * @description 发送数据
     * @date 2021-11-01
     * @param {any} data
     * @returns {Promise<any>}
     */
    public sendData<P = any>(data: any): Promise<P> {
        return new Promise((resolve, reject) => {
            this.socket.send(data);
            resolve(data);
        });
    }

    /**
     * @description 关闭连接方法
     * @date 2021-11-01
     * @returns {Promise<any>}
     */
    public closeSocket(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.status = -1;
            this.socket.close();
            this.queue.clearAll();
            resolve([]);
        });
    }
}
