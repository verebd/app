'use strict'

export function testHandler($http) {

  this.newTest;
  this.newTestValidity;

  this.setNewTest = test => {
    this.newTest = test;
  };

  this.getNewTest = () => {
    return this.newTest;
  };

  this.setNewTestValidity = validity => {
    this.newTestValidity = validity;
  };

  this.addNewTest = () => {
    return $http.get('/api/tests').success(data => {
      this.newTest['id'] = data.length + 1;
    }).then(() => {
      return $http.post('/api/tests', this.newTest);
    });
  };
}
