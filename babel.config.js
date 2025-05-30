// export default {
//   presets: ["@docusaurus/babel/preset"],
// };


module.exports ={
    "compact": true,
    "presets": [
      "@docusaurus/babel/preset",  
    //   [
    //     "@babel/preset-env"
    //     // {
    //     //   "targets": {
    //     //     "node": true,
    //     //     "chrome": "58",
    //     //     "ie": "11"
    //     //   }
    //     // },
    //     // "stage-0"
    //   ],
    //   "@babel/preset-react"
    //   // "es2015"
    ],
  
    "plugins": [
      "syntax-dynamic-import",
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-optional-chaining",
      ["@babel/plugin-transform-arrow-functions", { "loose": true }],
      [
        "@babel/plugin-transform-runtime"
        //   {
        //     "absoluteRuntime": false,
        //     "corejs": 3
        //   }
      ],
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      "@babel/plugin-proposal-async-generator-functions",
      "@babel/plugin-transform-dotall-regex",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      ["@babel/plugin-proposal-class-static-block", { "loose": true }],
      [
        "@babel/plugin-proposal-decorators",
        {
          // "legacy": true,
          "version": "legacy"
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ],
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
      ["@babel/plugin-proposal-private-methods", { "loose": true }],
      "@babel/plugin-proposal-json-strings",
      [
        "@babel/plugin-transform-regenerator",
        {
          "asyncGenerators": false,
          "generators": false,
          "async": false
        }
      ]
    ]
  }