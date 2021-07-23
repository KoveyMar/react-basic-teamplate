import { Model } from 'dva';
import { Location } from 'umi';
import { ActPayLoad } from '@/types';

/**
 *
 * @description template manage
 *
 */

export interface SortItemFace {
    id: string;
    name: string;
    sort?: number;
    type?: string;
}

export type TempList<T = SortItemFace> = Array<T>;

export interface TemplateState {
    template: TempList;
}

const dataTemplate: Model = {
    namespace: 'dataTemplate',
    state: {
        template: [] as TempList,
    },
    reducers: {
        /**
         * @description 更新单个数据
         * @date 2021-07-14
         * @returns {any}
         */
        saveBySingle(
            state: TemplateState,
            action: ActPayLoad<any, TemplateState>,
        ): TemplateState {
            const { payload } = action;
            const { template } = state;
            let newVal: Array<any> = [payload, ...template];
            return { template: newVal };
        },
        /**
         * @description 批量更新
         * @date 2021-07-14
         * @returns {any}
         */
        saveByBatch(
            state: TemplateState,
            action: ActPayLoad<any, TemplateState>,
        ): TemplateState {
            const { payload } = action;
            let t: any = payload;
            return { template: t };
        },
        /**
         * @description clearAll
         * @date 2021-07-14
         * @returns {any}
         */
        clearAllData(): TemplateState {
            return { template: [] };
        },
        /**
         * @description delete By Id
         * @date 2021-07-14
         * @returns {any}
         */
        deleteSingle(
            state: TemplateState,
            action: ActPayLoad<any, SortItemFace>,
        ): TemplateState {
            const { payload } = action;
            const { template } = state;
            const index = payload ? template.indexOf(payload) : -1;
            index !== -1 && template.splice(index, 1);
            return { template: [...template] };
        },
    },
    effects: {
        *singleUpdate({ payload }, { call, put, select }) {
            yield put({
                type: 'saveBySingle',
                payload,
            });
            const { template } = yield select(
                (state: any) => state.dataTemplate,
            );
            return { template };
        },
        *batchUpdate({ payload }, { call, put, select }) {
            yield put({
                type: 'saveByBatch',
                payload,
            });
            const { template } = yield select(
                (state: any) => state.dataTemplate,
            );
            return { template };
        },
        *clearData({ payload }, { call, put, select }) {
            yield put({
                type: 'clearAllData',
            });
            const { template } = yield select(
                (state: any) => state.dataTemplate,
            );
            return { template };
        },
        *singleDelete({ payload }, { call, put, select }) {
            yield put({
                type: 'deleteSingle',
                payload,
            });
            const { template } = yield select(
                (state: any) => state.dataTemplate,
            );
            return { template };
        },
        *getData({ payload }, { call, put, select }) {
            const { template } = yield select(
                (state: any) => state.dataTemplate,
            );
            return { template };
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen((location: Location<any>) => {
                // const { pathname, query } = location;
                // if (pathname.includes('dataManageTemplate/create')) {
                //     query?.create === '0' && dispatch({
                //         type: 'clearData'
                //     });
                // }
            });
        },
    },
};

export default dataTemplate;
