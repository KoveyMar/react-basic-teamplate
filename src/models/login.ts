import { Model } from 'dva';
import { getToken } from '@/utils/RandomValue';
import { ActPayLoad } from '@/types/schemes';
import { LoginTypes } from '@/types/pages/Login';

const sendData: Function = async (payload: LoginTypes) => {
    const { username, password } = payload;
    return username === 'admin' && password === '123456'
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
};

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
         * @param {any} action:ActPayLoad<any
         * @param {any} LoginTypes>
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
    // Action 处理器，处理异步动作
    effects: {
        *request({ payload }, { call, put, select }) {
            let { code, data, message } = yield call(sendData, payload);
            if (code === 200) {
                yield put({
                    type: 'saveLoginState',
                    payload: {
                        ...data,
                        token: getToken(),
                    },
                });
            }
            const { token } = yield select((state: any) => state.login);
            data = { ...data, token };
            return { code, data, message };
        },
        *logOut(action: ActPayLoad<any, LoginTypes>, { call, put, select }) {
            yield put({
                type: 'clearLoginState',
            });
            return {};
        },
    },
    /**
     *    subscriptions相当于一个监听器，
     *      可以监听路由变化，鼠标，键盘变化，服务器连接变化，状态变化等，
     *      这样在其中就可以根据不同的变化做出相应的处理
     *
     */
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen;
        },
    },
};

export default login;
