/**
 * @description 由于采用定义 router, src/layouts 约定弃用
 *
 */
import type { IConfigFromPlugins } from '@@/core/pluginConfig';
import type { RenderNode, SysResponse } from '@/types';

export interface RouterTypes extends IConfigFromPlugins {
    name?: string;
    type?: number | string;
    icon?: RenderNode;
}

/**
 * @description xhr response Error
 */
export interface ErrorTypes extends Partial<Omit<SysResponse, 'success'>> {
    routers?: any[];
}
