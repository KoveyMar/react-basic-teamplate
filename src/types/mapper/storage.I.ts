/**
 * @description Store Mapper
 * @type {Storage | any} store
 */
export default interface IMapper {
    /**
     * @description Storage Object
     * @type {Storage}
     */
    store: Storage | any;

    /**
     * @function get
     * @description get a group of value by keys
     * @returns {(KeyString: string[]) => any[]}
     */
    get keys(): (KeyString: string[]) => any[];

    /**
     * @description set a value in key
     * @date 2023-02-14
     * @param {string} key
     * @param {JSON | string | void} value
     * @returns {void}
     */
    setStore<K extends string, V = JSON | string | void>(
        key: K,
        value: V,
    ): void;

    /**
     * @description get a value by key
     * @date 2023-02-14
     * @param {any} key:K
     * @returns {string | null}
     */
    getStore<K extends string>(key: K): string | null;

    /**
     * @description delete a value by key
     * @date 2023-02-14
     * @param {string} key
     * @returns {void}
     */
    removeStore<K extends string>(key: K): void;

    /**
     * @description remove all Storage value
     * @date 2023-02-14
     * @returns {void}
     */
    clearStore(): void;
}
