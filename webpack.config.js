var webpack = require('webpack');

var node_modules = __dirname + '/node_modules';

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
    this.entry.vendors.push(name);
  },
  context: __dirname + '/app',
  entry: {
    app: [ './core/bootstrap.js' ],
    vendors: []
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
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js')
  ]
}

config.addVendor('angular', node_modules + '/angular/angular.js');
config.addVendor('angular-resource', node_modules + '/angular-resource/angular-resource.js');
config.addVendor('angular-ui-router', node_modules + '/angular-ui-router/release/angular-ui-router.js');
config.addVendor('ocLazyLoad', node_modules + '/oclazyload/dist/ocLazyLoad.js');
config.addVendor('angular-messages', node_modules + '/angular-messages/angular-messages.js');

module.exports = config;
