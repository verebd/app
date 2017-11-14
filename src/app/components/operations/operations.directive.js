export function OperationsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/operations/operations.html',
    controller: OperationsController,
    controllerAs: 'oc',
    bindToController: true
  };

  return directive;
}

class OperationsController {
  constructor () {
    'ngInject';
  }

}
