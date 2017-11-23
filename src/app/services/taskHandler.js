'use strict'

export function taskHandler($http) {

  this.newTask;

  this.setNewTask = task => {
    this.newTask = task;
  };

  this.addNewTask = () => {
    return $http.get('/api/tasks').success(data => {
      this.newTask['id'] = data.length + 1;
    }).then(() => {
      return $http.post('/api/tasks', this.newTask);
    });
  }
}