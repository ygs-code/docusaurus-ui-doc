import WebpackBar from "webpackbar";
export default function (context, options) {
  return {
    name: "custom-docusaurus-plugin",
    configureWebpack(config, isServer, utils) {
      const { getJSLoader } = utils;
      // webpack 配置
      return {
        name: "docusaurus-plugin",
        getPathsToWatch() {
          const contentPath = path.resolve(context.siteDir, options.path);
          return [`${contentPath}/**/*.{ts,tsx}`];
        },
        plugins: [
          // 编译进度条
          new WebpackBar(),
        ],

        module: {
          rules: [
            //   {
            //     test: /\.foo$/,
            //     use: [getJSLoader(isServer), 'my-custom-webpack-loader'],
            //   },
          ],
        },
      };
    },
  };
}
