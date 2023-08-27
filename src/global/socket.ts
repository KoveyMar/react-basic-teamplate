import { getLocalHost } from '@/utils';
import { ORIGIN } from './origin';
import { ENV_DEV } from './config';

/**
 * @description 获取生产环境下ws主机域名
 * @description systemConfig优先,systemConfig为null,则获取当前主机origin
 * @date 2022-01-06
 * @returns {any}
 */
function SocketHost(): string {
    const LocalHost = getLocalHost();
    const configURL = window.systemConfig.BASE_ORIGIN;
    return configURL ?? LocalHost;
}

/**
 * @description websocket
 */
export const WS_BASE_URL = `ws://${ENV_DEV ? ORIGIN : SocketHost()}`;
