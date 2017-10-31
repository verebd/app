/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from './components/navbar/navbar.directive';
import { AdminHeaderDirective } from './components/adminheader/adminheader.directive';
import { SidebarDirective } from './components/sidebar/sidebar.directive';

angular.module('app', ['ngAnimate', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('navbar', NavbarDirective)
  .directive('adminheader', AdminHeaderDirective)
  .directive('sidebar', SidebarDirective);
