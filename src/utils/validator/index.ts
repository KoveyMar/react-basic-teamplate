import type { Rule, RuleObject } from 'antd/lib/form';

/**
 * @description 特殊字符验证 callback
 * @date 2022-01-17
 * @param {any} rule:RuleObject
 * @param {any} value:any
 * @param {any} callback:(error?:string
 * @returns {any}
 */
async function validSpecialSymbol(
    rule: RuleObject,
    value: any,
    callback: (error?: string) => void,
): Promise<void> {
    //TODO
    const pattern: RegExp = /^(~!@#$%^&*<>)$/g;
    try {
        if (pattern.test(value)) {
            throw new Error('不能含有特殊字符');
        }
    } catch (e: any) {
        callback(e);
    }
}

/**
 * @description 首尾非空验证
 */
export const validateEmpty: Rule = { whitespace: !0, message: '不能含有空格' };

/**
 * @description 不包含特殊字符
 */
export const validateSpecialSym: Rule = { validator: validSpecialSymbol };

/**
 * @description
 */
export const validateU32Code: Rule = {};

/**
 * @description 大小写字母,及下划线
 */
export const validateNormalString = /^[A-Za-z_]+$/g;
