import { defineConfig } from 'umi';
import { BASE_ORIGIN } from './src/global/origin';

export default defineConfig({
    /**
     * @description --devServer config
     */
    devServer: {
        proxy: {
            '/api': {
                target: BASE_ORIGIN,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
});
