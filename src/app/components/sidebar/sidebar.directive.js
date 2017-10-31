export function SidebarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/sidebar/sidebar.html',
    // scope: {
    //     creationDate: '='
    // },
    controller: SidebarController,
    controllerAs: 'sc',
    bindToController: true
  };

  return directive;
}

class SidebarController {
  constructor ($log) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    // this.relativeDate = moment(this.creationDate).fromNow();
    $log.debug('SidebarCtrl');
  }
}
