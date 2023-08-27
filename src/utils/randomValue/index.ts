import type { HexaDecimalTyeps } from '@/types/utils';

/**
 * @description 根据传入数字转换对应进制
 * @param {number | string} n
 * @param {?number} radix  16
 * @returns {string}
 */
function Ft(n: number | string, radix: HexaDecimalTyeps = 16): string {
    return Math.floor(Math.random() * Number(n)).toString(radix);
}

/**
 * @name    getRandomValue
 * @function
 * @description 生成随机数值
 * @date 2021-06-09
 * @param {number} max
 * @param {number} floatNum
 * @returns {number}
 */
export function getRandomValue(
    max: number = 100,
    floatNum: number = 0,
): number {
    let v = -1;
    return (
        (v = Math.random() * max),
        floatNum > 0 ? Number.parseFloat(String(v)) : Number.parseInt(String(v))
    );
}

/**
 * @name    getStrId
 * @function
 * @description 获取一段随机字符串
 * @param {HexaDecimalTyeps} hexa
 * @returns {string}
 */
export function getStrId(hexa: HexaDecimalTyeps = 8): string {
    const _v = '0xffffffff';
    return Ft(_v, hexa);
}

/**
 * @name    getUUID
 * @function
 * @description 生成16进制随机UUID
 * @date 2021-06-09
 * @param {string} split
 * @returns {string}
 */
export function getUUID(split?: string): string {
    const U = ['0xfffffff', '0xfffff', '0xfffff', '0xfffff', '0xfffff'];
    return U.map((v) => Ft(v, 16)).join(split ?? '-');
}

/**
 * @name    generateID
 * @function
 * @description  迭代自增ID
 * @date 2021-09-10
 * @returns {string}
 */
export function generateID(): string {
    let d = new Date().getTime();
    return 'xxxxxxxxx-xxxx-yxxx-xxxy-xxxxxxxxx'.replace(/[xy]/g, (r) => {
        const c = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (r === 'x' ? c : (c & 0x7) | 0x8).toString(16);
    });
}
