import { defineConfig } from 'umi';
import routes from './src/router/router.basic';

export default defineConfig({
    publicPath: './',
    dynamicImport: {
        loading: '@/components/loading/index',
    },
    history: {
        type: 'hash',
    },
    routes,
    nodeModulesTransform: {
        type: 'none',
    },
    fastRefresh: {},
});
