var webpack = require('webpack');

var node_modules = __dirname + '/node_modules';

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
    this.entry.vendor.push(name);
  },
  context: __dirname + '/app',
  entry: {
    app: [ 'webpack/hot/dev-server', './core/bootstrap.js' ],
    vendor: []
  },
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
    root: __dirname + '/app/'
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'ng-annotate!babel' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.html$/, loader: 'raw' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      MODE: {
        production: process.env.NODE_ENV === 'production'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
}

config.addVendor('angular', node_modules + '/angular/angular.js');
config.addVendor('angular-ui-router', node_modules + '/angular-ui-router/release/angular-ui-router.js');

module.exports = config;
