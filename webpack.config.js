var webpack = require('webpack');

var node_modules     = __dirname + '/node_modules';
var bower_components = __dirname + '/bower_components';

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

config.addVendor('angular',           bower_components + '/angular/angular.js');
config.addVendor('angular-resource',  bower_components + '/angular-resource/angular-resource.js');
config.addVendor('angular-ui-router', bower_components + '/angular-ui-router/release/angular-ui-router.js');
config.addVendor('angular-messages',  bower_components + '/angular-messages/angular-messages.js');
config.addVendor('ocLazyLoad',        bower_components + '/oclazyload/dist/ocLazyLoad.js');

module.exports = config;
