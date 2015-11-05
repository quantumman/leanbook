var babel = require("babel-core");
var webpack = eval(babel.transformFileSync("./webpack.config.babel.js").code);

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha"],
    files: [
      "test/js/**/*.test.js"
    ],
    exclude: [
    ],
    preprocessors: {
      "test/js/**/*.test.js": ["webpack"]
    },
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS", "Safari"],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpack,
    plugins: [
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-webpack",
      "karma-phantomjs-launcher"
    ]
  });
};
