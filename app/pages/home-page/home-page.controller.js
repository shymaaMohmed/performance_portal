angular
  .module('appModule')
  .controller('homeController', homePageController);
function homePageController(Employees, $scope, $location) {
  const homePageVm = this;
  homePageVm.employees = [];

  $scope.testFunc = function (someArg) {
    console.log(someArg);
    $location.search('filter', someArg);
   }
  
  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
