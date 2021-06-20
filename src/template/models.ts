import { Model } from 'dva';
import { ActPayLoad } from '@/types/schemes';

/**
 * ref
 *
 * model 下定义各个dva 的模块，在pages模块中使用connect进行绑定
 *
 * https://dvajs.com/guide/introduce-class.html#dva-%E5%BA%94%E7%94%A8%E7%9A%84%E6%9C%80%E7%AE%80%E7%BB%93%E6%9E%84%EF%BC%88%E5%B8%A6-model
 *
 * @template    dvaModels
 *
 */

interface Types {}

const template: Model = {
    // 当前 Model 的名称。整个应用的 State，由多个小的 Model 的 State 以 namespace 为 key 合成
    namespace: 'template',
    //  该 Model 当前的状态。数据保存在这里，直接决定了视图层的输出
    state: {},
    /**
     * @description Action 处理器，处理同步动作，用来算出最新的 State
     * @returns 更新 state
     */
    reducers: {
        //  state为初始值,   action为新数据
        save(state: Types, action: ActPayLoad<any, Types>): Types {
            const { payload } = action;
            return { ...state, ...payload };
        },
    },
    /**
     * @description Action 处理器，处理异步动作
     * @returns 用于Promise
     */
    effects: {
        *request({ payload }, { call, put, select }) {
            yield call();
            yield put({
                type: 'save',
                payload: { ...payload },
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

export default template;
