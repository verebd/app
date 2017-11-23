/* global moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {NavbarDirective} from './components/navbar/navbar.directive';
import {AdminHeaderDirective} from './components/adminheader/adminheader.directive';
import {SidebarDirective} from './components/sidebar/sidebar.directive';
import {TaskGridDirective} from './components/grid/taskgrid.directive';
import {TestGridDirective} from './components/grid/testgrid.directive';
import {MainContainerDirective} from './components/maincontainer/maincontainer.directive.js';
import {OperationsDirective} from './components/operations/operations.directive.js';
import {NewTaskDirective} from './components/newtask/newtask.directive.js';
import {dataHandler} from './services/dataHandler';
import {taskHandler} from './services/taskHandler';

angular.module('app', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('navbar', NavbarDirective)
  .directive('adminheader', AdminHeaderDirective)
  .directive('sidebar', SidebarDirective)
  .directive('taskgrid', TaskGridDirective)
  .directive('testgrid', TestGridDirective)
  .directive('operations', OperationsDirective)
  .directive('maincontainer', MainContainerDirective)
  .directive('newtask', NewTaskDirective)
  .service('dataHandler', ['$http', dataHandler])
  .service('taskHandler', ['$http', taskHandler]);
