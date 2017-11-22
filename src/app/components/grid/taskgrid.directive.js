export function TaskGridDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/grid/taskgrid.html',
    controller: TaskGridController,
    controllerAs: 'gm',
    bindToController: true,
    require: 'dataHandler'
  };

  return directive;
}

class TaskGridController {
  constructor (dataHandler) {
    'ngInject';

    this.headerItems = dataHandler.getHeaderItems('tasks');
    dataHandler.getAllData('tasks').then(tasks => {
      this.tasks = tasks.data;
    });
  }

}
