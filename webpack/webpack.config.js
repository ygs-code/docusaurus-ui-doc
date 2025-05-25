const WebpackBar = require("webpackbar"); // webpack 进度条
const { merge } = require("webpack-merge"); // webpack 合并配置
const path = require("path");
// const clientWebpackConfig = require("../@webpack-cli/client/index.js"); // webpack cli 客户端配置
const ExtendedDefinePlugin = require("extended-define-webpack-plugin");
 
let {
  NODE_ENV, // 环境参数
  WEB_ENV, // 环境参数
  target, // 环境参数
  HTML_WEBPACK_PLUGIN_OPTIONS = '',
  APP_ROOT_DIRECTORY,
  DOMAIN_NAME,
  DOMAIN_MIDDLE,
  APP_BASE_URL,
} = process.env; // 环境参数

module.exports = function (context) {
  return {
    name: "webpack",
    // webpack 配置
    configureWebpack(config, isServer, utils) {
      // const {
      //   resolve,
      //   module,
      //   plugins
      // }=clientWebpackConfig()

      // console.log('clientWebpackConfig()==',clientWebpackConfig())

      // return {
      //   resolve,
      //   module,
      //   plugins

      // }
      return {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "../src"),
            src: path.resolve(__dirname, "../src"),

            // "@": path.resolve(process.cwd(), "/src"),
            // src: path.resolve(process.cwd(), "/src"),
          },
        },

        plugins: [
          // 注入全局常量
          new ExtendedDefinePlugin({
            process: {
              DOMAIN_MIDDLE,
              APP_ROOT_DIRECTORY,
              env: {
                DOMAIN_NAME,
                DOMAIN_MIDDLE,
                APP_ROOT_DIRECTORY,
                APP_BASE_URL,
                NODE_ENV,
              },
            },
            APP_CONFIG: {
              api_key: "1234567890ABCDEFG",
              fb_conf: {
                use_social: true,
                api_key: "123456790",
              },
            },
          }),
        ],
      };
    },
  };
};
