/**
 * @description 生成随机数值
 * @date 2021-06-09
 * @param {any} max=100
 * @param {any} floatNum=0
 * @returns {any}
 */
export function getRandomValue(
    max: number = 100,
    floatNum: number = 0,
): number {
    let v: number = -1;
    return (
        (v = Math.random() * max),
        floatNum > 0 ? parseFloat(String(v)) : parseInt(String(v))
    );
}

/**
 * @description 生成16进制随机TOKEN
 * @date 2021-06-09
 * @returns {any}
 */
export function getToken(split: string = '-'): string {
    const U: Array<number> = [0xfffff, 0xffff, 0xffff, 0xfffff];
    return U.map((v: number) =>
        Math.floor(Math.random() * v).toString(16),
    ).join(split);
}

/**
 * @description 随机字符生成
 * @date 2022-03-29
 * @returns {any}
 */
export function generateUUID(): string {
    let d: number = new Date().getTime();
    let uuid: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            let r: number = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
        },
    );
    return uuid;
}
