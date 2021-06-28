const nameSpace: string = 'sessionStorage';

const store: Storage = window.sessionStorage;

/**
 * @description set sessionStorage By Key
 * @date 2021-06-09
 * @param {any} key:string
 * @param {any} value:JSON|string
 * @returns {void}
 */
export function setSessionStore(
    key: string,
    value: JSON | string | void,
): void {
    store.setItem(key, JSON.stringify(value));
}

/**
 * @description get sessionStorage By Key
 * @date 2021-06-09
 * @param {any} key:string
 * @returns {any}
 */
export function getSessionStore(key: string): string | null {
    const v: string | null = store.getItem(key);
    return v === null ? null : JSON.parse(v);
}

/**
 * @description remove sessionStorage By Key
 * @date 2021-06-28
 * @param {any} key:string
 * @returns {void}
 */
export function removeSessionStore(key: string): void {
    return store.removeItem(key);
}

/**
 * @description All Clear sessionStorage
 * @date 2021-06-28
 * @returns {any}
 */
export function emptySessionStore(): void {
    store.clear();
}
