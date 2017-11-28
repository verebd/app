'use strict'

export function taskHandler($http) {

  this.newTask;
  this.newTaskValidity;

  this.setNewTask = task => {
    this.newTask = task;
  };

  this.setNewTaskValidity = validity => {
    this.newTaskValidity = validity;
  };

  this.addNewTask = () => {
    return $http.get('/api/tasks').success(data => {
      this.newTask['id'] = data.length + 1;
    }).then(() => {
      return $http.post('/api/tasks', this.newTask);
    });
  };

  this.getTopics = tasks => {
    let topics = new Set();
    tasks.forEach(task => {
      topics.add(task.topic);
    });
    return Array.from(topics);
  };
}
