export function GridDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/grid/grid.html',
    controller: GridController,
    controllerAs: 'gm',
    bindToController: true,
    require: 'dataHandler'
  };

  return directive;
}

class GridController {
  constructor (dataHandler) {
    'ngInject';

    this.headerItems = dataHandler.getHeaderItems('tasks');
    this.tasks = dataHandler.getAllData('tasks');
  }

}
