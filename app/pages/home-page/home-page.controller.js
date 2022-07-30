angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $scope) {
  const homePageVm = this;
  homePageVm.employees = [];

  $scope.testFunc = function (someArg) {
    console.log(someArg);
   }
  
  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
}
