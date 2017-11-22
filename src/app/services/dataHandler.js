'use strict'
export function dataHandler($http) {
  this.getHeaderItems = name => {
    let headerItems;
    switch (name) {
      case 'tasks':
        headerItems = ['ID', 'Title', 'Topic', 'Difficulty', 'Type'];
        break;
      case 'tests':
        headerItems = ['ID', 'Test title', 'Task IDs'];
        break;
      // case 'assessments':

    }
    return headerItems;
  };

  this.getAllData = name => {
    return $http.get('/api/' + name).success(data => {
      return data;
    });
  };

  this.getQuestionIDs = test => {
    let questions = [];
    test['tasks'].forEach(task => {
      questions.push(task['id']);
    });
    return questions;
  };
}
