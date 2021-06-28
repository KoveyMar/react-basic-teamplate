const nameSpace: string = 'localStorage';

const store: Storage = window.localStorage;

/**
 * @description set localStorage By Key
 * @date 2021-06-09
 * @param {any} key:string
 * @param {any} value:JSON|string
 * @returns {void}
 */
export function setLocalStore(key: string, value: JSON | string | void): void {
    store.setItem(key, JSON.stringify(value));
}

/**
 * @description get localStorage By Key
 * @date 2021-06-09
 * @param {any} key:string
 * @returns {any}
 */
export function getLocalStore(key: string): string | null {
    const v: string | null = store.getItem(key);
    return v === null ? null : JSON.parse(v);
}

/**
 * @description remove localStorage By Key
 * @date 2021-06-28
 * @param {any} key:string
 * @returns {void}
 */
export function removeLocalStore(key: string): void {
    return store.removeItem(key);
}

/**
 * @description All Clear localStorage
 * @date 2021-06-28
 * @returns {any}
 */
export function emptyLocalStore(): void {
    store.clear();
}
