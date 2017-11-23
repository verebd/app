export function MainContainerDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/maincontainer/maincontainer.html',
    controller: MainContainerController,
    controllerAs: 'mc',
    bindToController: true
  };

  return directive;
}

class MainContainerController {
  constructor ($location) {
    'ngInject';

    this.getGridToShow = activeTabName => {
      let currentTab = $location.url();
      console.log('currt', currentTab);
      return currentTab === activeTabName;
    }

  }

}
