export function GridDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/grid/grid.html',
    controller: GridController,
    controllerAs: 'gm',
    bindToController: true
  };

  return directive;
}

class GridController {
  constructor ($http, $getData) {
    'ngInject';

    let table = $getData(name);
    this.headerItems = table.headerItems;
    this[name] = table[name];
  }

}
