/**
 * @Author: gaomingjun
 * @Date:   2017-09-08 10:12:35
 * @Last modified by:   gaomingjun
 * @Last modified time: 2017-09-20 11:40:02
 */



const DEBUG = process.env.NODE_ENV === 'development';
process.noDeprecation = true;
const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const publicPath = '/';
const DEV_PATH = path.join(process.cwd(), 'src');
const PRO_PATH = path.join(process.cwd(), 'dist');
const EXA_PATH = path.join(process.cwd(), 'example');

let entry = {}; //基础入口文件
if (DEBUG) {
  entry = {
    'simple': path.resolve(EXA_PATH, 'simple.js')
  };
} else {
  entry = {
    'sosnail': path.resolve(DEV_PATH, 'sosnail.js')
  };
};

const loaders = {
  'babelLoader': {
    'loader': 'babel-loader',
    'options': {
      'compact': false,
      'presets': ['env', 'es2015']
    }
  }
};

let plugins = [
  new webpack.BannerPlugin(`version: ${pkg.version}`),
  //new ProgressPlugin(),
  new webpack.DefinePlugin({
    'process': {
      'env': {
        'NODE_ENV': '"' + process.env.NODE_ENV + '"'
      }
    }
  }),
  new webpack.LoaderOptionsPlugin({
    'debug': DEBUG
  }),
  //提供全局的变量，在模块中使用无需用require引入
  new HtmlWebpackPlugin({
    'env': process.env.NODE_ENV,
    'filename': 'index.html',
    'template': path.resolve(DEV_PATH, 'index.html'),
    'hash': !DEBUG,
    'cache': !DEBUG,
    'inject': 'head',
    'minify': {
      'removeComments': true,
      'collapseWhitespace': true
    }
  })
];
if (!DEBUG) {
  plugins.unshift(new CleanWebpackPlugin([path.resolve(PRO_PATH, '**/*')], {
    'root': PRO_PATH,
    'verbose': true,
    'dry': false,
    'exclude': []
  }));
  plugins.push(new uglifyJsPlugin({
    'compress': {
      'warnings': false
    }
  }));
}

module.exports = {
  'devtool': DEBUG ? '#cheap-module-eval-source-map' : '#source-map',
  'cache': !DEBUG,
  'devServer': {
    'contentBase': PRO_PATH,
    'compress': false,
    'noInfo': true,
    'host': '0.0.0.0',
    'overlay': {
      'warnings': false,
      'errors': true
    }
  },
  'entry': entry,
  'output': {
    'path': PRO_PATH,
    'publicPath': '/',
    'filename': '[name].min.js',
    'libraryTarget': 'umd',
    'library': 'sosnail'
  },
  'resolve': {
    'modules': [
      DEV_PATH,
      PRO_PATH,
      path.resolve(DEV_PATH, 'module'),
      path.resolve(process.cwd(), 'example'),
      path.resolve(process.cwd(), 'node_modules')
    ]
  },
  'module': {
    'rules': [{
      'test': /\.js$/,
      'exclude': /node_modules/,
      'use': loaders.babelLoader
    }]
  },
  'plugins': plugins
};
