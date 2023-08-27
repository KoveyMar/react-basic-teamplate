import moment from 'moment';

/**
 * @description 转换时间
 * @param {string} e
 * @returns {number}
 */
export function toTime(e: string | number): number {
    return new Date(e).getTime();
}

/**
 * @description 转换时间格式
 * @date 2021-09-16
 * @param {string} date
 * @param {string} format YYYY-MM-DD hh:mm:ss
 * @returns {string}   default YYYY-MM-DD hh:mm:ss
 */
export function FormatDate(
    date: moment.MomentInput,
    format: string = 'YYYY-MM-DD HH:mm:ss',
): string {
    let r: string = '-';
    if (date) {
        r = moment(date).format(format);
    }
    return r;
}

/**
 * @description 计算时间差
 * @param {moment.MomentInput} start
 * @param {moment.MomentInput} end
 * @returns {number}
 */
export function getMomentDiff(
    start: moment.MomentInput,
    end: moment.MomentInput,
    format: string = 'HH:mm:ss',
): string {
    const m1 = moment(start);
    const m2 = moment(end);
    return moment.utc(m2.diff(m1, 'seconds') * 1e3).format(format);
}

/**
 * @description 获取当前时间zh-CN
 * @date 2021-11-29
 * @returns {string}
 */
export function GetNowTime(): string {
    return moment(new Date()).format(`YYYY年MM月DD日 HH:mm:ss`);
}

/**
 * @description Moment 转换 DateString
 * @date 2023-04-14
 * @param {moment.MomentInput[] | moment.MomentInput} date
 * @param {string} format YYYY/MM/DDHH:mm:ss
 * @returns {string | string[]}
 */
export function formatMomentDate<D = moment.MomentInput>(
    date: D | D[],
    format: string = 'YYYY/MM/DD HH:mm:ss',
): string[] | string {
    return Array.isArray(date)
        ? date.map((d) => moment(d || new Date()).format(format))
        : moment(date || new Date()).format(format);
}

/**
 * @description DateString 转换 Moment
 * @date 2023-04-14
 * @param {moment.Moment[] | moment.Moment} date
 * @returns {moment.Moment[] | moment.Moment}
 */
export function serialMoment<D = moment.MomentInput>(
    date: D[],
): moment.Moment[] {
    return Array.isArray(date) ? date.map((d) => moment(d || new Date())) : [];
}
