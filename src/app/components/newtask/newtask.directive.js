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
    this.newTask['id'] = null;
    this.newTask['type'] = null;
    this.newTask['difficulty'] = null;
    this.newTask['topic'] = null;
    this.newTask['text'] = null;

    taskHandler.setNewTask(this.newTask);
    taskHandler.setNewTaskValidity(false);

    this.clearTask = () => {
      if (this.newTask['type'] === 'open') {
        document.querySelector('#optionA').value = "";
        document.querySelector('#optionB').value = "";
        document.querySelector('#optionC').value = "";
        document.querySelector('#optionD').value = "";
        document.querySelector('#solution').value = "";
        delete this.newTask['options'];
        delete this.newTask['solution'];
      }
    };

    this.changeProperties = () => {
      switch (this.newTask['type']) {
        case 'open':
          this.clearTask();
          break;
        case 'multiple-choice':
          this.newTask['options'] = [];
          this.newTask['solution'] = null;
          break;
      }
    };

    this.isFormValid = () => {
      let validity = true;
      for (let key in this.newTask) {
        if (key != 'id') {
          validity = validity && !!this.newTask[key];
          if (key === 'options') {
            this.newTask['options'].forEach(option => {
              validity = validity && !!option;
            });
          }
        }
      }
      taskHandler.setNewTaskValidity(validity);
    };
  }
}
