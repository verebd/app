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
  constructor($location) {
    'ngInject';

    this.isTabSelected = checkTab => {
      let url = $location.url();
      let rx = /^\/([^\/][a-zA-Z0-9]+)(\/.+)?$/;
      let token = url.match(rx);
      return token[1] === checkTab;
    };
  }
}
