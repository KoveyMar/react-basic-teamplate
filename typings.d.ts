declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
    export function ReactComponent(
        props: React.SVGProps<SVGSVGElement>,
    ): React.ReactElement;
    const url: string;
    export default url;
}

/**
 * @description 自定义window对象额外属性
 */
declare interface Window {
    /**
     *  @description qiankun 插件全局属性
     */
    __POWERED_BY_QIANKUN__: any;

    /**
     *  @description    public config挂载于window对象下的配置
     */
    systemConfig: {
        BASE_ORIGIN: null | void | string;
    };
}
