import { Model } from 'dva';
import { getUUID } from '@/utils';
import type { ActPayLoad, SysResponse } from '@/types';
import type { LoginModel } from '@/types/models';

async function sendData(payload: LoginModel): Promise<SysResponse> {
    const { username, password } = payload;
    return username === 'admin' && password === '12345'
        ? {
              code: 200,
              data: payload,
              message: '登录成功',
          }
        : {
              code: 500,
              data: payload,
              message: '用户名或密码错误,登录失败',
          };
}

const staticData = {
    username: null,
    password: null,
    token: null,
} as LoginModel;

const login: Model = {
    namespace: 'login',
    state: {
        ...staticData,
    },
    reducers: {
        updateState(
            state: LoginModel,
            action: ActPayLoad<any, LoginModel>,
        ): LoginModel {
            let { token } = state;
            const {
                payload: { code, data, message },
            }: any = action;
            code === 200 && (token = getUUID());
            const newVal: LoginModel = {
                ...data,
                token,
            };
            return { ...state, ...newVal };
        },
        clearAllState(): LoginModel {
            return {
                ...staticData,
            };
        },
    },
    effects: {
        *requestLogin(
            { payload }: ActPayLoad<any, LoginModel>,
            { call, put, select },
        ): Generator<any, SysResponse, any> {
            let res = { code: 0, data: null, message: '' } as SysResponse;
            try {
                res = yield call(sendData, payload);
            } catch (error) {}
            yield put({
                type: 'updateState',
                payload: res,
            });
            const { token } = yield select((state: any) => state.login);
            return { ...res, data: token };
        },
        *logOut(
            action: ActPayLoad<any, LoginModel>,
            { call, put, select },
        ): Generator<any, {}, any> {
            yield put({
                type: 'clearAllState',
            });
            return {};
        },
    },
    subscriptions: {
        // setup({ dispatch, history }) {
        //     return history.listen();
        // },
    },
};

export default login;
