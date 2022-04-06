import { Model } from 'dva';
import { getToken } from '@/utils/RandomValue';
import { ActPayLoad, SysResponse } from '@/types/schemes';
import { LoginTypes } from '@/types/pages/Login';
import { MOCK_ACCOUNT } from '@/global';

async function sendData(payload: LoginTypes): Promise<SysResponse> {
    return Object.keys(MOCK_ACCOUNT)
        .map((value: string) => MOCK_ACCOUNT[value] === payload[value])
        .filter((flag: boolean) => flag).length >= 2
        ? {
              code: 200,
              result: payload,
              message: '登录成功',
          }
        : {
              code: 500,
              result: payload,
              message: '用户名或密码错误,登录失败',
          };
}

const login: Model = {
    namespace: 'login',
    state: {
        username: null,
        password: null,
        token: null,
    },
    reducers: {
        /**
         * @name    saveLoginState
         * @description 保存登录信息
         * @date 2022-03-29
         * @param {any} state:LoginTypes
         * @param {any} action:ActPayLoad
         * @returns {any}
         */
        saveLoginState(
            state: LoginTypes,
            action: ActPayLoad<any, LoginTypes>,
        ): LoginTypes {
            const { payload } = action;
            return { ...state, ...payload };
        },
        /**
         * @name    clearLoginState
         * @description 清除登录信息
         * @date 2022-03-29
         * @returns {any}
         */
        clearLoginState(): LoginTypes {
            const data = {
                username: null,
                password: null,
                token: null,
            };
            return data;
        },
    },
    effects: {
        *request({ payload }, { call, put, select }) {
            let { code, result, message } = yield call(sendData, payload);
            if (code === 200) {
                yield put({
                    type: 'saveLoginState',
                    payload: {
                        ...result,
                        token: getToken(),
                    },
                });
            }
            const { token } = yield select((state: any) => state.login);
            result = { ...result, token };
            return { code, result, message };
        },
        *logOut(action: ActPayLoad<any, LoginTypes>, { call, put, select }) {
            yield put({
                type: 'clearLoginState',
            });
            return {};
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen;
        },
    },
};

export default login;
