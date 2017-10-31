export function AdminHeaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/adminheader/adminheader.html',
    // scope: {
    //     creationDate: '='
    // },
    controller: AdminHeaderController,
    controllerAs: 'hc',
    bindToController: true
  };

  return directive;
}

class AdminHeaderController {
  constructor ($log) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    // this.relativeDate = moment(this.creationDate).fromNow();
    $log.debug('AdminHeaderCtrl');
  }
}
