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
  constructor ($http) {
    'ngInject';
    this.headerItems = ['ID', 'Title', 'Topic', 'Difficulty', 'Type'];

    $http.get('/tasks').success(data => {
      this.tasks = data.tasks;
    });
  }

}
