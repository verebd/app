export function NewTestDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/newtest/newtest.html',
    controller: NewTestController,
    controllerAs: 'ntec',
    bindToController: true,
    require: 'testHandler'
  };

  return directive;
}

class NewTestController {
  constructor(dataHandler, taskHandler, testHandler) {
    'ngInject';

    this.newTest = {};
    this.newTest['id'] = null;
    this.newTest['title'] = null;
    this.newTest['tasks'] = [];

    this.availableTasks;
    this.taskGroups = [];
    this.formErrorMessage = null;

    testHandler.setNewTest(this.newTest);

    this.addGroup = () => {
      let groupConfig = {};
      groupConfig['topic'] = null;
      groupConfig['difficulty'] = null;
      groupConfig['type'] = null;
      groupConfig['number'] = null;
      groupConfig['submitted'] = false;
      groupConfig['validity'] = null;
      groupConfig['validityErrorMessage'] = null;
      this.taskGroups.push(groupConfig);
    };

    this.collectProperTasks = group => {
      let allProperTasks = [];
      this.availableTasks.forEach(task => {
        if (task['topic'] === group['topic'] && task['difficulty'] === group['difficulty'] && task['type'] === group['type']) {
          allProperTasks.push(task);
        }
      });
      return allProperTasks;
    };

    this.deleteTask = task => {
      let index = this.availableTasks.findIndex(item => {
        return item['id'] === task['id'];
      });
      this.availableTasks.splice(index, 1);
    };

    this.generateRandomIndexes = (taskArray, number) => {
      let randoms = [];
      for (let i = 0; i < number; i++) {
        let index = Math.floor(Math.random() * taskArray.length);
        if (randoms.indexOf(index) > -1){
          i--;
        } else {
          randoms.push(index);
        }
      }
      return randoms;
    };

    this.getRandomTasks = (taskArray, number) => {
      let randoms = this.generateRandomIndexes(taskArray, number);
      let selectedTasks = [];
      randoms.forEach(random => {
        selectedTasks.push(taskArray[random]);
      });
      return selectedTasks;
    };

    this.isSelectionGroupValid = group => {
      let validity = !!group['topic'] && !!group['difficulty'] && !!group['type'] && !!group['number'];
      if (!validity){
        group['validity'] = false;
        group['validityErrorMessage'] = 'Please, fill in all fields in the row.';
        return false;
      }
      if (!Number.isInteger(group['number'])){
        group['validity'] = false;
        group['validityErrorMessage'] = 'Please, type a whole number into the Number of questions field';
        return false;
      }
      return true;
    };

    this.isThereEnoughAvailableTasks = (actualTaskCount, group)  => {
      if (actualTaskCount < group['number']){
        group['validity'] = false;
        group['validityErrorMessage'] = `There is not enough question for this selection. Please, change the number so that it should be at most ${actualTaskCount}`;
        return false;
      }
      return true;
    };

    this.submitTaskGroup = group => {
      if (!this.isSelectionGroupValid(group)) {
        return false;
      }
      let properTasks = this.collectProperTasks(group);
      if (!this.isThereEnoughAvailableTasks(properTasks.length, group)) {
        return false;
      }
      group['validity'] = true;
      let selectedTasks = this.getRandomTasks(properTasks, group['number']);
      selectedTasks.forEach(task => {
        this.deleteTask(task);
        this.newTest['tasks'].push(task);
      });
      group['submitted'] = true;
    };

    this.isFormValid = () => {
      let validity = true;
      validity = validity && !!this.newTest['title'];
      validity = validity && !!this.newTest['options'].length;
      testHandler.setNewTestValidity(validity);
    };

    dataHandler.getAllData('tasks').then(tasks => {
      this.availableTasks = tasks.data;
      this.topics = taskHandler.getTopics(tasks.data);
    });

  }

}
