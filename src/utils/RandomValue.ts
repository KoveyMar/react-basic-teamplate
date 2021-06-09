/**
 * @description 生成随机数值
 * @date 2021-06-09
 * @param {any} max=100
 * @param {any} floatNum=0
 * @returns {any}
 */
export function getRandomValue(max = 100, floatNum = 0): number {
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
export function getToken(): string {
    const U: Array<number> = [0xfffff, 0xffff, 0xffff, 0xfffff];
    let j: Array<string> = [];
    for (let [i, v] of U.entries()) {
        j[i] = Math.floor(Math.random() * v).toString(16);
    }
    return j.join('-');
}
