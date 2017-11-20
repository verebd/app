'use strict';

let getData = angular.module('getData', ['$http']);
getData.factory('getData', $http => {

  let getHeaderItems = name => {
    let headerItems;
    switch (name) {
      case 'tasks':
        headerItems = ['ID', 'Title', 'Topic', 'Difficulty', 'Type'];
      case 'tests':

      case 'assessments':

    }
    return headerItems;
  };

  let allData = name => {
    let table = {};
    console.log(name);
    table.header = getHeaderItems(name);
    $http.get('/api/' + name).success(data => {
      table[name] = data;
      return table;
    });
  };

  return allData();
});
