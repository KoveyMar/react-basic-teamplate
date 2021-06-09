/**
 * @description 设置localStorage 存储
 * @date 2021-06-09
 * @param {any} key:string
 * @param {any} value:JSON|string
 * @returns {any}
 */
export function setLocalStore(key: string, value: JSON | string): void {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description 获取localStorage 存储
 * @date 2021-06-09
 * @param {any} key:string
 * @returns {any}
 */
export function getLocalStore(key: string): string | null {
    const v: string | null = localStorage.getItem(key);
    return v === null ? null : JSON.parse(v);
}
