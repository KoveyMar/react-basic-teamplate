/**
 * @description 浅拷贝
 * @date 2021-09-24
 * @param {any} obj
 * @returns {any}
 */
export function simpleCopy<T = any>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * @description 对象转换到url params
 * @date 2022-12-02
 * @param {{[key:string]:any}} data
 * @returns {string}
 */
export function parseParamString(data: { [key: string]: any }): string {
    return Object.keys(data)
        .map((k) => k + '=' + data[k])
        .join('&');
}

/**
 * @description 转换url params到对象
 * @date 2022-12-05
 * @param {string} val
 * @returns {{ [key: string]: any }}
 */
export function StringToParams(val: string | void): { [key: string]: any } {
    let O: { [key: string]: string } = {};
    if (val) {
        val.split('&').forEach((vals: string) => {
            const [k, v] = vals.split('=');
            O[k] = v;
        });
    }
    return O;
}
