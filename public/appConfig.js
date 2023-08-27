/**
 * @description --production global config
 * @description 根据生产环境,修改 websocket连接域名,不包含ws://头
 * @description systemConfig优先,当BASE_ORIGIN为null,则获取当前主机origin
 */

var systemConfig = {
    BASE_ORIGIN: null,
};

window.systemConfig = systemConfig;
