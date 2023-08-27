import type { Loading } from 'umi';
import type { ErrorTypes } from '@/types';

/**
 * @description login interface
 */
export interface LoginModel {
    username: string | null;
    password: string | null;
    token?: string | null;
}

/**
 * @description dva RootState
 */
export default interface RootState {
    login: LoginModel;
    error: ErrorTypes;
    loading: Loading;
}
