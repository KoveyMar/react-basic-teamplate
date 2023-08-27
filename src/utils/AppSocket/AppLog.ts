import type { LogMapper, LogProps } from '@/types/mapper/webSocket.I';

/**
 * @name    AppConsole
 * @class
 * @description Console
 * @template    WebSocket
 * @returns {LogMapper}
 */
export default class AppLog implements LogMapper<any> {
    constructor(props: LogProps) {
        const { title } = props;
        this.title = title;
    }

    private title: string = '';

    private console: Console = window.console;

    public log(message: string): void {
        this.console.log(`${this.title} - ${message}`);
    }

    public warn(message: string): void {
        this.console.warn(`${this.title} - ${message}`);
    }

    public err(message: string): void {
        this.console.error(`${this.title} - ${message}`);
    }
}
