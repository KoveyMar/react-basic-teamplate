/**
 * @description web ENV
 */
export const ENV_DEV = process.env.NODE_ENV === 'development';

/**
 * @description app_token key
 */
export const APP_TOKEN = 'App-Token';

/**
 * @description axios baseUrl
 */
export const BASE_URL = ENV_DEV ? `/api` : '';

/**
 * @description global home by App router
 */
export const HOME_ROUTER = '/home/test';

/**
 * @description global upload file
 */
export const UPLOAD_FILE_URL = '/component/upload';
