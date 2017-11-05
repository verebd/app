export function AdminHeaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/adminheader/adminheader.html',
    controller: AdminHeaderController,
    controllerAs: 'hc',
    bindToController: true
  };

  return directive;
}

class AdminHeaderController {
  constructor () {
    'ngInject';
  }
}
