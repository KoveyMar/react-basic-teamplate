import { SysResponse } from '@/types';

/**
 * @description 处理多个Promise对象,并根据 fulfilled / rejected,返回对应结果
 * @date 2022-03-31
 * @param {any} AsyncTask:Promise<P>[]
 * @returns {any}
 */
export default async function processAysncTask<P = SysResponse, R = any>(
    AsyncTask: Promise<P>[],
): Promise<R[]> {
    return Promise.allSettled(AsyncTask).then(
        (result: PromiseSettledResult<P>[]) =>
            result.map((item: PromiseSettledResult<P>) =>
                item.status === 'fulfilled' ? item.value : item.reason,
            ),
    );
}
