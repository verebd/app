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
  constructor(dataHandler, taskHandler) {
    'ngInject';

    this.newTest = {};
    this.newTest['id'] = null;
    this.newTest['title'] = null;
    this.newTest['tasks'] = [];

    this.availableTasks;
    this.taskGroups = [];

    this.addGroup = () => {
      let groupConfig = {};
      groupConfig['topic'] = null;
      groupConfig['difficulty'] = null;
      groupConfig['type'] = null;
      groupConfig['number'] = null;
      groupConfig['submitted'] = false;
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

    this.submitTaskGroup = group => {
      let properTasks = this.collectProperTasks(group);
      let selectedTasks = this.getRandomTasks(properTasks, group['number'])
      selectedTasks.forEach(task => {
        this.deleteTask(task);
        this.newTest['tasks'].push(task);
      });
    };

    dataHandler.getAllData('tasks').then(tasks => {
      this.availableTasks = tasks.data;
      this.topics = taskHandler.getTopics(tasks.data);
    });

  }

}
