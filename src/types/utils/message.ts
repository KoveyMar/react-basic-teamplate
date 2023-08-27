import type { ArgsProps } from 'antd/lib/notification';
import type { SysResponse } from '..';

/**
 * @description 提示框组件 Types
 */
declare namespace MessageTypes {
    /**
     * @description Antd notification Props API
     */
    type UIProps = ArgsProps;

    /**
     * @description Partial Props
     */
    type PartialProps = Partial<UIProps>;

    /**
     * @description Show Message By Code
     */
    type ResponseResult = Omit<SysResponse, 'data'>;

    /**
     * @description { message: string }
     */
    type NormalResponseResult = Omit<SysResponse, 'code' | 'data'>;
}

/**
 * @exports
 */
export type NProps = MessageTypes.UIProps;

/**
 * @exports
 */
export type MsgProps = MessageTypes.PartialProps;

/**
 * @exports
 */
export type ResponseType = MessageTypes.ResponseResult;

/**
 * @exports
 */
export type NormalResponseType = MessageTypes.NormalResponseResult;
