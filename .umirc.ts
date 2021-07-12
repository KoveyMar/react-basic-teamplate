import { defineConfig } from 'umi';
import routes from './src/router/router.basic';
import { BASE_ORIGIN } from './src/global/config';

const assetDir: string = 'static';

const isEnvDevelopment: boolean = process.env.NODE_ENV === 'development';

const publicPath = './';

export default defineConfig({
    publicPath,
    routes,
    title: '任务管理',
    /**
     * @description 使用loading加载页面
     */
    dynamicImport: {
        loading: '@/components/loading/index',
    },
    history: {
        type: 'hash',
    },
    nodeModulesTransform: {
        type: 'none',
    },
    terserOptions: {
        compress: {
            drop_console: !isEnvDevelopment,
        },
    },
    fastRefresh: {},
    /**
     * @description 从umi 引入public 文件
     */
    scripts: [
        {
            src: './appConfig.js',
        },
    ],
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
    /**
     * @description --webpack build config
     */
    chainWebpack: async (config, { env, webpack, createCSSRule }) => {
        if (isEnvDevelopment) return !1;
        config.merge({
            optimization: {
                splitChunks: {
                    chunks: 'all',
                    minSize: 30000,
                    minChunks: 3,
                    automaticNameDelimiter: '.',
                    cacheGroups: {
                        vendor: {
                            name: 'vendors',
                            test({ resource }: any) {
                                return /[\\/]node_modules[\\/]/.test(resource);
                            },
                            priority: 10,
                        },
                    },
                },
            },
        });

        config.output
            .filename(`${assetDir}/js/[name].[hash:8].js`)
            .chunkFilename(`${assetDir}/js/[name].[contenthash:8].chunk.js`);

        config.plugin('extract-css').tap(() => [
            {
                filename: `${assetDir}/css/[name].[contenthash:8].css`,
                chunkFilename: `${assetDir}/css/[name].[contenthash:8].chunk.css`,
                ignoreOrder: true,
            },
        ]);

        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/)
            .use('url-loader')
            .loader(require.resolve('url-loader'))
            .tap((options) => {
                const newOptions = {
                    ...options,
                    name: `${assetDir}/img/[name].[hash:8].[ext]`,
                    fallback: {
                        ...options.fallback,
                        options: {
                            name: `${assetDir}/img/[name].[hash:8].[ext]`,
                            esModule: false,
                        },
                    },
                };
                return newOptions;
            });

        config.module
            .rule('svg')
            .test(/\.(svg)(\?.*)?$/)
            .use('file-loader')
            .loader(require.resolve('file-loader'))
            .options({
                name: `${assetDir}/images/[name].[hash:8].[ext]`,
                esModule: false,
                publicPath,
            });

        config.module
            .rule('fonts')
            .test(/\.(eot|woff|woff2|ttf)(\?.*)?$/)
            .use('file-loader')
            .loader(require.resolve('file-loader'))
            .tap((options) => ({
                ...options,
                name: `${assetDir}/fonts/[name].[hash:8].[ext]`,
                fallback: {
                    ...options.fallback,
                    options: {
                        name: `${assetDir}/fonts/[name].[hash:8].[ext]`,
                        esModule: false,
                    },
                },
            }));
    },
});
