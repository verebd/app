export function OperationsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/operations/operations.html',
    controller: OperationsController,
    controllerAs: 'oc',
    bindToController: true,
    require: 'taskHandler'
  };

  return directive;
}

class OperationsController {
  constructor($location, taskHandler, testHandler) {
    'ngInject';

    this.isCreatePage = () => {
      let currentUrl = $location.url();
      return currentUrl.indexOf('create') > -1;
    };

    this.isCreateTaskPage = () => {
      let currentUrl = $location.url();
      return currentUrl.indexOf('create-new-task') > -1;
    };

    this.isCreateTestPage = () => {
      let currentUrl = $location.url();
      return currentUrl.indexOf('create-new-test') > -1;
    };

    this.navigateToCreatePage = () => {
      let currentUrl = $location.url();
      switch (currentUrl) {
        case '/tasks':
          $location.path("/tasks/create-new-task");
          break;
        case '/tests':
          $location.path("/tests/create-new-test");
          break;
      }
    };

    this.navigateToGridPage = () => {
      let currentUrl = $location.url();
      switch (currentUrl) {
        case '/tasks/create-new-task':
          $location.path("/tasks");
          break;
        case '/tests/create-new-test':
          $location.path("/tests");
          break;
      }
    };

    this.isTaskReadyForSave = () => {
      return taskHandler.newTaskValidity;
    };

    this.isTestReadyForSave = () => {
      let validity = true;
      validity = validity && !!testHandler.getNewTest()['title'];
      validity = validity && !!testHandler.getNewTest()['tasks'].length;
      return validity;
    };

    this.saveTask = () => {
      return taskHandler.addNewTask().then(() => {
        $location.path("/tasks");
      });
    };

    this.saveTest = () => {
      return testHandler.addNewTest().then(() => {
        $location.path("/tests");
      });
    };
  }
}
