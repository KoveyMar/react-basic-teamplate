import { defineConfig } from 'umi';
import routes from './src/router/router.basic';

export default defineConfig({
    publicPath: './',
    history: {
        type: 'hash',
    },
    routes,
    nodeModulesTransform: {
        type: 'none',
    },
    fastRefresh: {},
});
