import { Model, SubscriptionAPI } from 'dva';
import { Location } from 'umi';
import type { ActPayLoad, ErrorTypes } from '@/types';
import type { RouterTypes } from '@/types/router';
import { messageEN } from '@/global';
import routes from '@/router/router.basic';

async function setMessage(payload: ErrorTypes | void): Promise<ErrorTypes> {
    const code = payload?.code || 404;
    const message = messageEN[code];
    return {
        code,
        message,
    };
}

function InfinityFlatRoute(data: Array<RouterTypes>): Array<any> {
    const stack: Array<RouterTypes> = Array.from<any>(data);
    let u: any[] = [];
    let node: any;
    while (((node = stack.shift()), node !== void 0)) {
        const { routes, path } = node;
        if (routes && routes.length) {
            stack.push(...routes);
        }
        u.push(path);
    }
    return u;
}

const StaticState = {
    message: '',
    data: null,
    code: -1,
    routers: InfinityFlatRoute(routes),
} as ErrorTypes;

const error: Model = {
    namespace: 'error',
    state: {
        ...StaticState,
    },
    reducers: {
        save(
            state: ErrorTypes,
            action: ActPayLoad<any, ErrorTypes>,
        ): ErrorTypes {
            const { payload } = action;
            return { ...state, ...payload };
        },
        AppLocation(
            state: ErrorTypes,
            action: ActPayLoad<string, ErrorTypes>,
        ): ErrorTypes {
            const { payload } = action;
            const { routers } = state;
            const code: number =
                (routers as any[])?.indexOf(payload) > -1 ? 404 : -1;
            return { ...state, code };
        },
    },
    effects: {
        *getStatus(
            { payload },
            { call, put, select },
        ): Generator<any, ErrorTypes, any> {
            const data = yield call(setMessage, payload);
            yield put({
                type: 'save',
                payload: data,
            });
            return data;
        },
        *getState(
            { payload },
            { call, put, select },
        ): Generator<any, ErrorTypes, any> {
            yield put({
                type: 'AppLocation',
                payload,
            });
            return yield select((state: any) => state.error);
        },
    },
    subscriptions: {
        setup({ dispatch, history }: any) {
            return history.listen((location: Location<any>) => {
                //  根据 router.basic,将不存在的路由,跳转到error页
                const { pathname } = location;
                dispatch({
                    type: 'getState',
                    payload: pathname,
                }).then((data: ErrorTypes) => {
                    const { routers } = data;
                    if ((routers as any[])?.indexOf(pathname) === -1) {
                        history.push('/404');
                    }
                });
            });
        },
    },
};

export default error;
