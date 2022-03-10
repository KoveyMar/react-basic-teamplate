/**
 * @description BasicMapper
 */
export default class BasicStoreMapper {
    public nameSpace: string = '';

    public store: any = {};

    /**
     * @name    size
     * @description get Store Length
     * @date 2022-03-02
     * @returns {any}
     */
    public get size(): number {
        return this.store.length;
    }

    /**
     * @name    setStoreVal
     * @description set Store
     * @date 2022-03-02
     * @param {any} key:K
     * @param {any} value:V
     * @returns {any}
     */
    public setStore<K extends string, V = JSON | string | void>(
        key: K,
        value: V,
    ): void {
        this.store.setItem(key, JSON.stringify(value));
    }

    /**
     * @name    getStoreVal
     * @description get Store
     * @date 2022-03-02
     * @returns {any}
     */
    public get getStore(): <K extends string>(key: K) => string | null {
        return <K extends string>(key: K): string | null => {
            const v: string | null = this.store.getItem(key);
            return v === null ? null : JSON.parse(v);
        };
    }

    /**
     * @name   removeStore
     * @description remove Store
     * @date 2022-03-02
     * @param {any} key:K
     * @returns {any}
     */
    public removeStore<K extends string>(key: K): void {
        return this.store.removeItem(key);
    }

    /**
     * @name    emptyStore
     * @description Clear All Store
     * @date 2022-03-02
     * @returns {any}
     */
    public emptyStore(): void {
        this.store.clear();
    }
}
