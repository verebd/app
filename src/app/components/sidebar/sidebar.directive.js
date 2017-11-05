export function SidebarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/sidebar/sidebar.html',
    controller: SidebarController,
    controllerAs: 'sc',
    bindToController: true
  };

  return directive;
}

class SidebarController {
  constructor () {
    'ngInject';

  }
}
