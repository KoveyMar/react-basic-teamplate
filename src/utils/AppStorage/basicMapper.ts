import type { StorageMapper } from '@/types/mapper';

/**
 * @class   Storage Mapper
 * @description Storage Basic
 * @returns {StorageMapper}
 */
export default class BasicMapper implements StorageMapper {
    public store: Storage = localStorage || sessionStorage;

    /**
     * @name    keys
     * @function get
     * @description params is Array<string>, forEach & Returns New Array
     * @date 2021-12-13
     * @returns {(KeyString: Array<string>) => Array<any>}
     */
    public get keys(): (KeyString: Array<string>) => Array<any> {
        return (KeyString: Array<string>) =>
            KeyString.map((key: string) => this.store.getStore(key));
    }

    /**
     * @name    size
     * @description get Stort Length
     * @date 2023-03-14
     * @returns {number}
     */
    public get size(): number {
        return this.store.length;
    }

    /**
     * @name    setStore
     * @function
     * @description Set Store By Key
     * @date 2021-12-13
     * @param {string} key
     * @param {JSON | string | void} value
     * @returns {void}
     */
    public setStore<K extends string, V = JSON | string | void | unknown>(
        key: K,
        value: V,
    ): void {
        this.store.setItem(key, JSON.stringify(value));
    }

    /**
     * @name    getStore
     * @function
     * @description Set Store By Key
     * @date 2021-12-13
     * @param {string} key
     * @returns {string | null | any}
     */
    public getStore<K extends string, R = string | null | any | unknown>(
        key: K,
    ): R {
        const v: string | null = this.store.getItem(key);
        return v === null ? null : JSON.parse(v);
    }

    /**
     * @name    getStore
     * @function
     * @description Remove Store By Key
     * @date 2021-12-13
     * @param {string} key
     * @returns {void}
     */
    public removeStore<K extends string>(key: K): void {
        return this.store.removeItem(key);
    }

    /**
     * @name    clearStore
     * @function
     * @description Clear All Store
     * @date 2021-12-13
     * @returns {void}
     */
    public clearStore(): void {
        return this.store.clear();
    }
}
