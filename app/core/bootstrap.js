'use strict';

require('angular');
let appModule = require('../app');
if (MODE.production) require('./production')(appModule);

angular.bootstrap(document, [appModule.name], { strictDi: true });
