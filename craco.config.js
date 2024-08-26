const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      console.log('Webpack Config:', webpackConfig); // Agrega esto para verificar la configuración

      // Configuración para resolver polyfills
      webpackConfig.resolve.fallback = {
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
        assert: require.resolve('assert/'),
        process: require.resolve('process/browser'),
        url: require.resolve('url/'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        zlib: require.resolve('browserify-zlib'),
      };

      // Configuración de plugins para incluir polyfills globales
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser',
        }),
      ];

      // Desactivar source-map-loader para evitar warnings
      webpackConfig.module.rules = webpackConfig.module.rules.filter(rule => {
          if (rule.use && rule.use.some(use => use.loader && use.loader.includes('source-map-loader'))) {
            return false; // Excluye source-map-loader
          }
          return true;
        });

      // Configuración para resolver extensiones de archivos
      webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];

      // Configuración para resolver módulos ECMAScript
      webpackConfig.resolve.mainFields = ['browser', 'module', 'main'];

      return webpackConfig;
    },
  },
};
