import { MockAccount } from '@/types/pages/Login';

export const APP_TOKEN = 'App-Token';

export const BASE_ORIGIN = 'https://github.com/users/KoveyMar/';

export const BASE_URL = process.env.NODE_ENV === 'development' ? `/api` : '/';

export const MOCK_ACCOUNT: MockAccount = {
    username: 'admin',
    password: '123456',
};
