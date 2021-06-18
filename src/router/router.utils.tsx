import { Redirect } from 'umi';
import { getLocalStore } from '@/utils/storage';
import { APP_TOKEN } from '@/global';

/**
 * @description router 权限控制
 * @date 2021-06-09
 * @returns {any}
 */
function getAuth(props: any): JSX.Element {
    const T = getLocalStore(APP_TOKEN);
    let n: JSX.Element;
    return (n = T ? <Redirect to="/home" /> : <Redirect to="/" />);
}

export default getAuth;
