import type { QueueMapper } from '@/types/mapper';

/**
 * @class
 * @description message queue
 * @date 2021-10-19
 * @returns {QueueMapper}
 */
export default class AppQueue implements QueueMapper {
    constructor() {
        this.queue = [];
    }

    public queue: any[];

    public get size(): number {
        return this.queue.length;
    }

    public get getAll(): any[] {
        return this.queue;
    }

    public setList(data: any[]): void {
        this.queue = data;
    }

    public getFirstItem(): any {
        return this.queue.shift();
    }

    public append(data: any): number {
        return this.queue.push(data);
    }

    public prepend(data: any): number {
        return this.queue.unshift(data);
    }

    public getLastItem(): any {
        return this.queue.pop();
    }

    public removeByKey(key: string, value: string): void {
        for (let i = 0; i < this.size; i++) {
            if (this.queue[i][key] === value) {
                this.queue.splice(i, 1);
                break;
            }
        }
    }

    public removeByIndex(index: number): void {
        this.queue.splice(index, 1);
    }

    public updateByIndex(index: number, item?: any): void {
        this.queue.splice(index, 1, item);
    }

    public clearAll(): void {
        this.queue = [];
    }
}
