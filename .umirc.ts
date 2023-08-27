import { defineConfig } from 'umi';
import routes from './src/router/router.basic';
import { ENV_DEV } from './src/global/config';

const assetDir = 'static';

const publicPath = '/';

export default defineConfig({
    publicPath,
    routes,
    outputPath: './dist',
    title: '系统管理',
    /**
     * @description 使用loading加载页面
     */
    dynamicImport: {
        loading: '@/components/loading/index',
    },
    /**
     * @description dva config
     */
    dva: {
        lazyLoad: !0,
    },
    history: {
        type: 'hash',
    },
    nodeModulesTransform: {
        type: 'none',
    },
    terserOptions: {
        compress: {
            drop_console: !ENV_DEV,
        },
    },
    /**
     * @description 快速启动开启
     */
    // mfsu: {},
    /**
     * @description 热刷新
     */
    fastRefresh: {},
    /**
     * @description webpack5
     */
    webpack5: {},
    /**
     * @description 从umi 引入public 文件
     */
    headScripts: [
        {
            src: './appConfig.js',
        },
    ],
    favicon: './assets/AppIcon256.png',
    /**
     * @description --webpack build config
     */
    chainWebpack: async (config, { env, webpack, createCSSRule }) => {
        if (ENV_DEV) return !1;
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
