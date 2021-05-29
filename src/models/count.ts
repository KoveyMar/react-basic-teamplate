import { Model } from 'dva';


/**
 * ref
 * 
 * model 下定义各个dva 的模块，在pages模块中使用connect进行绑定
 * 
 * https://dvajs.com/guide/introduce-class.html#dva-%E5%BA%94%E7%94%A8%E7%9A%84%E6%9C%80%E7%AE%80%E7%BB%93%E6%9E%84%EF%BC%88%E5%B8%A6-model
 * 
 * 
 */
const count: Model = {
    // 当前 Model 的名称。整个应用的 State，由多个小的 Model 的 State 以 namespace 为 key 合成
    namespace: 'count',
    //  该 Model 当前的状态。数据保存在这里，直接决定了视图层的输出
    state: {
        count: 0
    },
    // Action 处理器，处理异步动作
    effects: {
        *getSelection(action: any, { call, put } ){
            yield call();
            yield put({ type: 'add' });
        }
    },
    // Action 处理器，处理同步动作，用来算出最新的 State
    reducers: {
        //  state为初始值,   action为新数据
        add( state: any, action: any ) {
            return { ...state, action };
        },
        remove( state: any, action: any ) {
            return { ...state, action };
        }
    }
}

export default count;