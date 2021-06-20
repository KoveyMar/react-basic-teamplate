import { defineConfig } from 'umi';
import routes from './src/router/router.basic';

const assetDir: string = 'static';

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
    scripts: [
        {
            src: './appConfig.js',
            defer: true,
        },
    ],
    chainWebpack: async (config, { env, webpack, createCSSRule }) => {
        config.output
            .filename(`${assetDir}/js/[name].[hash:8].js`)
            .chunkFilename(`${assetDir}/js/[name].[contenthash:8].chunk.js`);

        // 修改css输出目录
        config.plugin('extract-css').tap(() => [
            {
                filename: `${assetDir}/css/[name].[contenthash:8].css`,
                chunkFilename: `${assetDir}/css/[name].[contenthash:8].chunk.css`,
                ignoreOrder: true,
            },
        ]);

        // 修改图片输出目录
        // config.module
        //     .rule('images')
        //     .test(/\.(png|jpe?g|gif|webp|ico|svg)(\?.*)?$/)
        //     .use('url-loader')
        //     .loader(require.resolve("url-loader"))
        //     .tap((options) => {
        //         const newOptions = {
        //             ...options,
        //             name: assetDir + "/images/[name].[hash:8].[ext]",
        //             fallback: {
        //                 ...options.fallback,
        //                 options: {
        //                     name: assetDir + "/images/[name].[hash:8].[ext]",
        //                     esModule: false,
        //                 },
        //             },
        //         };
        //         return newOptions;
        //     });

        // // 修改fonts输出目录
        // config.module
        //     .rule("fonts")
        //     .test(/\.(eot|woff|woff2|ttf)(\?.*)?$/)
        //     .use("file-loader")
        //     .loader(require.resolve("file-loader"))
        //     .tap((options) => ({
        //         ...options,
        //         name: assetDir + "/fonts/[name].[hash:8].[ext]",
        //         fallback: {
        //             ...options.fallback,
        //             options: {
        //                 name: assetDir + "/fonts/[name].[hash:8].[ext]",
        //                 esModule: false,
        //             },
        //         },
        //     }));
    },
});
