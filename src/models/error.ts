import { Model } from 'dva';
import { Location } from 'umi';
import { ActPayLoad } from '@/types/schemes';

export interface ErrorTypes {
    code?: number;
    result?: any;
    message?: string | null | void;
}

const setMessage: Function = async (payload: ErrorTypes | void) => {
    return {
        code: 404,
        message: 'The Source Is Not Found',
    };
};

const error: Model = {
    namespace: 'error',
    state: {
        message: '',
        result: null,
        code: -1,
    },
    reducers: {
        save(
            state: ErrorTypes,
            action: ActPayLoad<any, ErrorTypes>,
        ): ErrorTypes {
            const { payload } = action;
            return { ...state, ...payload };
        },
    },
    effects: {
        *getInfo({ payload }, { call, put, select }) {
            const data = yield call(setMessage, payload);
            yield put({
                type: 'save',
                payload: data,
            });
            return data;
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen((location: Location<any>) => {
                const l = location.pathname.split('/')[1];
                if (l == 'error') {
                    dispatch({
                        type: 'getInfo',
                        payload: {},
                    });
                }
            });
        },
    },
};

export default error;
