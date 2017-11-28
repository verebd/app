export function NewTestDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/newtest/newtest.html',
    controller: NewTestController,
    controllerAs: 'ntec',
    bindToController: true,
    require: 'taskHandler'
  };

  return directive;
}

class NewTestController {
  constructor(dataHandler, taskHandler, $log) {
    'ngInject';

    this.testConfig = {};
    this.testConfig.groups = [];
    this.tempGroups = [];

    this.addGroup = () => {
      this.tempGroups.push({});
    };
    dataHandler.getAllData('tasks').then(tasks => {
      this.topics = taskHandler.getTopics(tasks.data);
    });
  }

}
