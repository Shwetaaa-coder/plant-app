export const PLANT_ID_API_KEY = '2q98rUaWSqVrQgT0Bcey80CrvSBmsvakUf8J8sD6FnW54IHTqH';
const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util/"),
        url: require.resolve("url/"),
        assert: require.resolve("assert/")
      };

      return webpackConfig;
    }
  }
};
