/**
 * @description mock data
 */
export interface MockAccount {
    [key: string]: string | null | void;
}

/**
 * @description Login Types
 */
export interface LoginTypes extends MockAccount {
    username: string | null;
    password: string | null;
    token?: string | null;
}
