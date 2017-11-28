export function TestGridDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/grid/testgrid.html',
    controller: TestGridController,
    controllerAs: 'tm',
    bindToController: true,
    require: 'dataHandler'
  };

  return directive;
}

class TestGridController {
  constructor (dataHandler) {
    'ngInject';

    this.headerItems = dataHandler.getHeaderItems('tests');
    dataHandler.getAllData('tests').then(tests => {
      this.tests = tests.data;
      this.tests.forEach(test => {
        test.questions = dataHandler.getQuestionIDs(test);
      });
    });
  }

}
