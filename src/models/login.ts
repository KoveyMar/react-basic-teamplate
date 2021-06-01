import { Action } from '@/.umi/plugin-dva/connect';
import { Model } from 'dva';

export interface LoginTypes {
    username: string | null;
    password: string | null;
    token?: string | null;
}

/**
 * ref
 *
 * model 下定义各个dva 的模块，在pages模块中使用connect进行绑定
 *
 * https://dvajs.com/guide/introduce-class.html#dva-%E5%BA%94%E7%94%A8%E7%9A%84%E6%9C%80%E7%AE%80%E7%BB%93%E6%9E%84%EF%BC%88%E5%B8%A6-model
 *
 *
 */
const login: Model = {
    // 当前 Model 的名称。整个应用的 State，由多个小的 Model 的 State 以 namespace 为 key 合成
    namespace: 'login',
    //  该 Model 当前的状态。数据保存在这里，直接决定了视图层的输出
    state: {
        username: null,
        password: null,
        token: null,
    },
    // Action 处理器，处理同步动作，用来算出最新的 State
    reducers: {
        //  state为初始值,   action为新数据
        saveInfo(state: LoginTypes, action: Action<any>) {
            return { ...state, ...action };
        },
    },
    // Action 处理器，处理异步动作
    effects: {
        *getData(action: any, { call, put }) {
            const { data } = yield call(action);
            yield put({
                type: 'saveInfo',
                payload: data,
            });
        },
    },
    /**
     *    subscriptions相当于一个监听器，
     *      可以监听路由变化，鼠标，键盘变化，服务器连接变化，状态变化等，
     *      这样在其中就可以根据不同的变化做出相应的处理
     *
     */
    subscriptions: {
        setup({ dispatch, history }) {},
    },
};

export default login;