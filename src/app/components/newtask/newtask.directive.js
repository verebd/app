export function NewTaskDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/newtask/newtask.html',
    controller: NewTaskController,
    controllerAs: 'ntc',
    bindToController: true,
    require: 'taskHandler'
  };

  return directive;
}

class NewTaskController {
  constructor(taskHandler) {
    'ngInject';

    this.newTask = {};
    taskHandler.setNewTask(this.newTask);

  }

}
