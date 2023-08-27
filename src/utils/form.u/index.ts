import type { GroupSource, OptionItem, RequireGroupSource } from '@/types';
import { validateNormalString } from '@/utils/validator';
import { getObjectProto } from '@/utils';

/**
 * @description 判断key 是否来自该对象
 * @param {Record<string, any>} tar
 * @param {keyof T} key
 * @returns {T[K] | T}
 */
function getVal<T extends Record<string, any>, K extends keyof T>(
    tar: T,
    key: K,
): T[K] | T {
    return getObjectProto(tar, 'Object') ? Reflect.get(tar, key) : tar;
}

/**
 * @description 判断两组值类型
 * @param {string} type
 * @param {any} P
 * @param {any} N
 * @returns {boolean}
 */
function isType<Type extends string>(type: Type, P: any, N: any): boolean {
    return typeof P === type && typeof N === type;
}

/**
 * @description 排序函数，支持字符串与数字排序
 * @param {Record<string, any>[]} data
 * @param {string|void} Sort
 * @returns {Record<string, any>[]}
 */
function SoryBy<T extends Record<string, any>>(
    data: T[],
    Sort: string | void,
): T[] {
    return !!Sort && validateNormalString.test(Sort)
        ? data.sort((prev, next) => {
              const pV = getVal(prev, Sort);
              const nV = getVal(next, Sort);
              return isType('number', pV, nV)
                  ? (pV as number) - (nV as number)
                  : isType('string', pV, nV)
                  ? (pV as string).localeCompare(nV as string)
                  : 0;
          })
        : data;
}

/**
 * @description 序列化options
 * @date 2022-10-28
 * @param {GroupSource} props
 * @returns {OptionItem[]}
 */
function serialOptions(props: GroupSource): OptionItem[] {
    const { Options, Group } = props;
    let _temp = [] as OptionItem[];
    if (Options) {
        _temp = Options;
    } else if (Group) {
        const { Source, Sort, Value, Label, Disabled, Checked } = Group;
        if (Source) {
            _temp = SoryBy(Source, Sort).map((V: any) => ({
                label: Label !== void 0 ? V[Label] : V,
                value: Value !== void 0 ? V[Value] : V,
                disabled: Disabled ? Boolean(Disabled?.indexOf(V) > -1) : !1,
                checked: Checked ? Boolean(Checked?.indexOf(V) > -1) : !1,
            }));
        }
    }
    return _temp;
}

/**
 * @exports
 * @description 分发Options
 * @date 2022-04-28
 * @param {any} props
 * @param {Function} callback
 * @returns {void}
 */
export function distpacthOptions(
    props: GroupSource,
    callback: (IProps: RequireGroupSource) => void,
): void {
    const Options = serialOptions(props);

    callback({ Options });
}
