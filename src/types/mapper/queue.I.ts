/**
 * @description Queue Mapper
 * @type {Array<any>} queue
 * @type {number} size
 * @type {Array<any>} getAll
 * @type {(data: any[]) => void} setList
 */
export default interface QueueMapper<T = any> {
    /**
     * @description data queue
     */
    queue: Array<T>;

    /**
     * @template {get}
     * @description get size of queue
     * @returns {number}
     */
    get size(): number;

    /**
     * @template {get}
     * @description get All data of queue
     * @returns {Array}
     */
    get getAll(): Array<T>;

    /**
     * @description set a data into queue
     * @date 2023-02-14
     * @param {any[]} data
     * @returns {void}
     */
    setList: (data: any[]) => void;

    /**
     * @description get the first data from the queue
     * @date 2023-02-14
     * @returns {any}
     */
    getFirstItem: () => any;

    /**
     * @description append new item to the end of the queue
     * @date 2023-02-14
     * @param {any} data
     * @returns {number}    size of queue
     */
    append: (data: any) => number;

    /**
     * @description insert new item to the start of the queue
     * @date 2023-02-14
     * @param {any} data
     * @returns {number}    size of queue
     */
    prepend: (data: any) => number;

    /**
     * @description get the last data from the queue
     * @date 2023-02-14
     * @returns {any}
     */
    getLastItem: () => any;

    /**
     * @description remove key and value in the data from the queue
     * @param {string} key
     * @param {string} value
     * @date 2023-02-14
     * @returns {void}
     */
    removeByKey: (key: string, value: string) => void;

    /**
     * @description remove index of the data from the queue
     * @date 2023-02-14
     * @param {number} index
     * @returns {void}
     */
    removeByIndex: (index: number) => void;

    /**
     * @description update index of the data from the queue
     * @date 2023-02-14
     * @param {number} index
     * @param {?any} item
     * @returns {void}
     */
    updateByIndex: (index: number, item?: any) => void;

    /**
     * @description remove all data in the queue
     * @date 2023-02-14
     * @returns {void}
     */
    clearAll: () => void;
}
