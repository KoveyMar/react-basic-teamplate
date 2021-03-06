import { Model } from 'dva';
import { Location } from 'umi';
import { ActPayLoad, ErrorTypes, SysResponse } from '@/types/schemes';
import { messageEN } from '@/global/http.status';

async function setMessage(payload: ErrorTypes | void): Promise<SysResponse> {
    let code = payload?.code || 404;
    const message = messageEN[code];
    return {
        code,
        result: null,
        message,
    };
}

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
        *getStatus({ payload }, { call, put, select }) {
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
                if (l === 'error') {
                    dispatch({
                        type: 'getStatus',
                        payload: {},
                    });
                }
            });
        },
    },
};

export default error;
