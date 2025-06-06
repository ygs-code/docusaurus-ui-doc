require('@babel/polyfill');
const path = require('path');
const webpack = require('webpack');
// const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader');
// const WebpackHotPlugin = require('browser-reload-error-overlay-wepback-plugin');
// const WebpackHotPlugin = require('webpack-hot-plugin');
const HappyPack = require('happypack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length - 1 });
const {
  NODE_ENV, // 环境参数
  WEB_ENV, // 环境参数
  target, // 环境参数
  HTML_WEBPACK_PLUGIN_OPTIONS = {},
} = process.env; // 环境参数

//    是否是生产环境
const isEnvProduction = NODE_ENV === 'production';
//   是否是测试开发环境
const isEnvDevelopment = NODE_ENV === 'development';

const cacheLoader = (happypackId) => {
  return isEnvDevelopment
    ? [
        // `happypack/loader?id=${happypackId}`,
        `happypack/loader?id=${happypackId}&cacheDirectory=true`,
        'thread-loader',
        'cache-loader',
      ]
    : ['thread-loader', `happypack/loader?id=${happypackId}`];
};

const getIPAdress = () => {
  let interfaces = require('os').networkInterfaces();
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
};

module.exports = {
  mode: 'development',
  // 入口
  entry: {
    // myVue: [path.join(process.cwd(), "/src/myVue.js")], // 公共包抽取
    vendor: ['react', 'react-dom'],
    app: [
      // '@babel/polyfill',
      //添加编译缓存
      // 'webpack/hot/poll?1000',
      'webpack-hot-middleware/client',
      //  path.join(process.cwd(), "/src/index.js")
      //入口主文件
      path.join(process.cwd(), '/src/index'), // 如果没有配置 context 则需要这样引入  path.join(__dirname, "../../src/index.js")
    ],
  },
  output: {
    // // 输出目录
    // path: path.join(process.cwd(), '/dist'),
    // // filename: '[name].[hash].js',
    // // chunkFilename: '[name].[hash].js',
    // // Chunk 配置
    // filename: 'static/js/[name].js',
    // chunkFilename: 'static/js/[name].js',
    // //静态子目录
    // // assetsSubDirectory: 'static',
    // 访问静态资源目录 比如 css img
    publicPath: '/', // 配置静态资源输出是相对路径还是绝对路径
    // // 导出库(exported library)的名称
    // // library: "server",
    // //   导出库(exported library)的类型
    // // libraryTarget: "umd",
    // // 在 UMD 库中使用命名的 AMD 模块
    // // umdNamedDefine: true,
    // // globalObject: "this",
    // // chunk 请求到期之前的毫秒数，默认为 120000
    // // chunkLoadTimeout: 120000,
    // // // // 「devtool 中模块」的文件名模板 调试webpack的配置问题
    // // // // 你的文件在chrome开发者工具中显示为webpack:///foo.js?a93h, 。如果我们希望文件名显示得更清晰呢，比如说 webpack:///path/to/foo.js
    // // devtoolModuleFilenameTemplate: (info) => {
    // //     // "webpack://[namespace]/[resource-path]?[loaders]"
    // //     return `webpack:///${info.resourcePath}?${info.loaders}`;
    // // },
    // // // // 如果多个模块产生相同的名称，使用
    // // devtoolFallbackModuleFilenameTemplate: (info) => {
    // //     return `webpack:///${info.resourcePath}?${info.loaders}`;
    // // },
    // // // 如果一个模块是在 require 时抛出异常，告诉 webpack 从模块实例缓存(require.cache)中删除这个模块。
    // strictModuleExceptionHandling 参数决定了当模块加载过程中出现错误时，Webpack 如何处理这些异常：
    strictModuleExceptionHandling: false,

    //         // path.join(process.cwd(), '/dist')
    // // //默认不用配置也可以
    // sourceMapFilename: 'static/js/hot-update/[name].[id].[hash].map',
    // // // 自定义热更新的主文件名(main filename)。可选的值的详细信息，请查看 output.filename 选项
    // // // 占位符只能是 [hash]，默认值是： 可以默认不配置
    hotUpdateMainFilename: "static/js/hot-update/[fullhash].json",
    // // 自定义热更新 chunk 的文件名。可选的值的详细信息，请查看 output.filename 选项。
    // // 占位符只能是 [id] 和 [hash]，默认值是：
    hotUpdateChunkFilename: 'static/js/hot-update/[name]_[fullhash].js',
  },
  watch: true,
  watchOptions: {
    //延迟监听时间
    aggregateTimeout: 300,
    //忽略监听文件夹
    ignored: '/node_modules/',
  },
  //启用编译缓存日志输出
  // infrastructureLogging: {
  //   level: "log",
  // },
  // 使用缓存
  cache: {
    type: 'filesystem', //  'memory' | 'filesystem'
    store: 'pack',
    // 缓存持续时间
    maxAge: 5184000000, // 5 * 24 * 60 * 60 * 1000
    maxMemoryGenerations: Infinity,
    cacheDirectory: path.join(process.cwd(), '/node_modules/.cache/webpack'), // 默认将缓存存储在 node_modules/.cache/webpack
    // 缓存依赖，当缓存依赖修改时，缓存失效
    buildDependencies: {
      // 将你的配置添加依赖，更改配置时，使得缓存失效
      config: [__filename],
    },
  },
  resolve: {
    //决定请求是否应该被缓存的函数。函数传入一个带有 path 和 request 属性的对象。默认：
    cachePredicate: () => {
      return true;
    },
    fallback: {
      process: false,
    },
    //启用，会主动缓存模块，但并不安全。传递 true 将缓存一切
    unsafeCache: true,
  },
  optimization: {
    // 压缩
    minimize: false,
    minimizer: [],

    //  任何字符串：用于设置 process.env.NODE_ENV 的值。
    nodeEnv: 'development',
    // moduleIds: "named",
    // chunkIds: "named",

    // 开启这个编译包更小
    // runtimeChunk: {
    //   name: (entrypoint) => `runtime~${entrypoint.name}`,
    // },
  },
  devtool: 'cheap-module-source-map', // 生产环境和开发环境判断
  module: {
    rules: [
      // // js和jsx编译
      // {
      //     test: /(\.m?js$)|(\.jsx?$)/,
      //     // enforce: 'pre',
      //     // 排除文件,因为这些包已经编译过，无需再次编译
      //     exclude: /(node_modules|bower_components)/,
      //     use: ['source-map-loader'].concat(cacheLoader('babel')),
      //     // use: {
      //     //  loader: "babel-loader",
      //     //   options: {
      //     //     presets: ["@babel/preset-env"],
      //     //     plugins: ["@babel/plugin-transform-runtime"],
      //     //   },
      //     // },
      // },

      // // css
      // {
      //   test: /\.css$/i,
      //   // 排除文件,因为这些包已经编译过，无需再次编译
      //   exclude: [/(node_modules|bower_components)/],
      //   include: [path.join(process.cwd(), '/src')],
      //   // enforce: 'pre',
      //   use: [
      //     'style-loader',
      //     // 'css-loader',
      //     'thread-loader',
      //     'cache-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //       },
      //     },

      //     //   {
      //     //     // test: /\.(woff|woff2|ttf|ttf2|otf)$/, // 匹配.woff和.woff2文件
      //     //     // use: {
      //     //       loader: 'url-loader',
      //     //       options: {
      //     //         name: '[name].[contenthash:10].[ext]', // 输出文件名格式
      //     //         outputPath: 'static/css/', // 输出目录
      //     //         esModule: false,
      //     //         // limit: 1024, // 文件大小小于1024byte时作为base64处理
      //     //       },
      //     //     // },
      //     //   },

      //     // {
      //     //     loader: 'url-loader',
      //     //     options: {
      //     //         esModule: false,
      //     //     },
      //     // },
      //     {
      //       loader: 'postcss-loader',
      //       // options: {
      //       //     postcssOptions: {
      //       //         plugins: [
      //       //             [
      //       //                 'autoprefixer',
      //       //                 {
      //       //                     // Options
      //       //                 },
      //       //             ],
      //       //         ],
      //       //     },
      //       // },
      //     },
      //   ],
      // },
      // // less
      // {
      //   test: /\.less$/i,
      //   enforce: 'pre',
      //   exclude: [/(node_modules|bower_components)/],
      //   use: [
      //     // compiles Less to CSS
      //     'style-loader',
      //     'css-loader',
      //     // 'less-loader',
      //     'thread-loader',
      //     'cache-loader',
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         sourceMap: true,
      //       },
      //     },
      //     {
      //       loader: 'resolve-url-loader',
      //       options: {},
      //     },
      //     // {
      //     //     loader: 'url-loader',
      //     //     options: {
      //     //         esModule: false,
      //     //     },
      //     // },
      //     {
      //       loader: 'postcss-loader',
      //       // options: {
      //       //     postcssOptions: {
      //       //         plugins: [
      //       //             [
      //       //                 'autoprefixer',
      //       //                 {
      //       //                     // Options
      //       //                 },
      //       //             ],
      //       //         ],
      //       //     },
      //       // },
      //     },
      //   ],
      // },

      // //  scss
      // {
      //   test: /\.s[ac]ss$/i,
      //   enforce: 'pre',
      //   exclude: [/(node_modules|bower_components)/],
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     'style-loader',
      //     // Translates CSS into CommonJS
      //     'css-loader',
      //     // Compiles Sass to CSS
      //     // 'sass-loader',
      //     'thread-loader',
      //     'cache-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         // Prefer `dart-sass`
      //         implementation: require('sass'),
      //         sourceMap: true,
      //         webpackImporter: true,
      //         warnRuleAsWarning: true,
      //       },
      //     },
      //     // {
      //     //     loader: 'url-loader',
      //     //     options: {
      //     //         esModule: false,
      //     //     },
      //     // },
      //     {
      //       loader: 'postcss-loader',
      //       // options: {
      //       //     postcssOptions: {
      //       //         plugins: [
      //       //             [
      //       //                 'autoprefixer',
      //       //                 {
      //       //                     // Options
      //       //                 },
      //       //             ],
      //       //         ],
      //       //     },
      //       // },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    //清理编译目录 清理缓存
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true, // 自动清理未使用的资源
      cleanOnceBeforeBuildPatterns: [
        '**/*', // 清理输出目录
        // path.join(process.cwd(), 'node_modules/.cache/**/*'), // 额外清理缓存
        // path.join(__dirname, 'node_modules/.cache/webpack/**/*'), // 额外清理缓存
      ],
    }),

    //esbuild-loader
    // new ESBuildPlugin(),

    // new HappyPack({
    //     id: 'babel',
    //     //添加loader
    //     // use: [
    //     //     {
    //     //         loader: 'esbuild-loader',
    //     //         options: {
    //     //             // cacheDirectory: true,
    //     //             loader: 'jsx', // Remove this if you're not using JSX
    //     //             target: 'es2015', // Syntax to compile to (see options below for possible values)
    //     //         },
    //     //     },
    //     // ],
    //     use: [
    //         {
    //             loader: "babel-loader"
    //             //   options: {
    //             //     presets: [
    //             //       [
    //             //         "@babel/preset-env",
    //             //         {
    //             //           targets: "> 0.25%, not dead",
    //             //         },
    //             //       ],
    //             //       "@babel/preset-react",
    //             //     ],
    //             //     plugins: [
    //             //       ["@babel/plugin-proposal-decorators", { "version": "legacy"  }],
    //             //       ["@babel/plugin-proposal-class-properties", { loose: true }],
    //             //     ],
    //             //   },
    //         }
    //     ],
    //     // use: ["babel-loader", "unicode-loader"],
    //     // 输出执行日志
    //     // verbose: true,
    //     // 使用共享线程池
    //     threadPool: happyThreadPool,
    // }),
    //缓存包 热启动
    // new webpack.HotModuleReplacementPlugin(),
    //   热刷新
    // new BrowserReloadPlugin(),
    // 热刷新和错误日志
    // new WebpackHotPlugin(),
    // 有跨域问题
    // new ErrorOverlayPlugin(),
  ],
  // devServer: {
  //   // disableHostCheck: true,
  //   overlay: {
  //     warnings: true,
  //     errors: true,
  //     inline: true,
  //   },
  //   watchFiles: [
  //     path.join(process.cwd(), '/src/**/*'),
  //     path.join(process.cwd(), '/src/*'),
  //     path.join(process.cwd(), '/public/**/*'),
  //     path.join(process.cwd(), '/public/*'),
  //   ],
  //   liveReload: true, // 编译之后是否自动刷新浏览器
  //   static: {
  //     directory: path.join(process.cwd(), '/dist'),
  //     watch: true,
  //   },
  //   index: path.resolve(process.cwd(), '/dist/index.html'), // dist/index 主页面
  //   contentBase: path.join(process.cwd(), '/dist'), //访问主页的界面 目录
  //   port: 8090, // 开启服务器的端口
  //   open: true, // 是否开启在浏览器中打开
  //   // public: 'http://localhost:8089',//添加配置
  //   host: getIPAdress(), //获取本机地址

  //   // // quiet:false,  //不要把任何东西输出到控制台。
  //   // // contentBase: "./public",//本地服务器所加载的页面所在的目录就是index.html 和moduel 不在同一个页面
  //   // // noInfo:true, //压制无聊信息。 //控制台不输出无聊信息
  //   // open:true, //启动的时候是否自动打开浏览器
  //   // port: 8089,  //端口
  //   // compress:true,//http 使用gzip压缩
  //   // hot: true,  // --inline还增加了WebPACK /热/开发服务器入口
  //   // inline: true,//实时刷新 可以监控js变化
  //   // historyApiFallback: true,//不跳转启用对历史API回退的支持。

  //   // proxy: {
  //   //   "/api": {
  //   //     target: "http://XX.XX.XX.XX:8084",
  //   //     changeOrigin: true,
  //   //     ws: true,
  //   //     pathRewrite: {
  //   //       "^/api": "",
  //   //     }
  //   //   }
  //   // }

  //   proxy: [
  //     // {
  //     //     context: ['/api/v1/common/upload/'],
  //     //     target: 'https://webpack.docschina.org/',
  //     //     changeOrigin: true,
  //     //     secure: false,
  //     //     // pathRewrite: {
  //     //     //   "^/api/v1/common/upload/": "/",
  //     //     // },
  //     // },
  //   ],

  //   // proxy: [
  //   //   {
  //   //     context: ["/api/v1/common/upload/"],
  //   //     target: "http://192.168.148.191:9091/",
  //   //     changeOrigin: true,
  //   //     secure: false,
  //   //     pathRewrite: {
  //   //       "^/api/v1/common/upload/": "/",
  //   //     },
  //   //   },

  //   //   // {
  //   //   //   context: ['/api/v1/scrm-marketing/full/draw/shop'],
  //   //   //   target: 'http://192.168.198.58:8120',
  //   //   //   changeOrigin: true,
  //   //   //   secure: false,
  //   //   //   // pathRewrite: {
  //   //   //   //   '^/api/v1/scrm-member/': '/'
  //   //   //   // },
  //   //   // },

  //   //   {
  //   //     context: ["/api/"],
  //   //     target: "https://sit-hlj.rainbowcn.com/",
  //   //     changeOrigin: true,
  //   //     secure: false,
  //   //   },
  //   //   // {
  //   //   //   context: ['/api/productActivities/getShoppe/'],
  //   //   //   target: 'http://192.168.213.183:9731/',
  //   //   //   changeOrigin: true,
  //   //   //   secure: false,
  //   //   //   pathRewrite: { '/api/productActivities/getShoppe': '/productActivities/getShoppe' },
  //   //   // },
  //   // ],
  // },
};
