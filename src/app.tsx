/**
 * @description CSS 统一入口
 */
import 'antd/dist/antd.css';
import '@/styles/index.less';
import '@/styles/normal.less';
import '@/styles/layout/index.less';
import '@/styles/tableList.less';

export function modifyClientRenderOpts(memo: any) {
    const rootElement = window.__POWERED_BY_QIANKUN__ ? 'root-master' : 'root';
    return {
        ...memo,
        rootElement,
    };
}
