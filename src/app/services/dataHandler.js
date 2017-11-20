'use strict'
export function dataHandler($http) {
  this.getHeaderItems = name => {
    let headerItems;
    switch (name) {
      case 'tasks':
        headerItems = ['ID', 'Title', 'Topic', 'Difficulty', 'Type'];
      // case 'tests':
      //
      // case 'assessments':

    }
    return headerItems;
  };

  this.getAllData = name => {
    return $http.get('/api/' + name).success(data => {
      return data;
    });
  };
}
