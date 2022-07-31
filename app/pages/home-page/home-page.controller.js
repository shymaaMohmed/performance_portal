angular
  .module('appModule')
  .controller('homeController', homePageController);
function homePageController(Employees, $scope, $location) {
  const homePageVm = this;

  homePageVm.filter = $location.$$search.filter
  
  homePageVm.employees = [];

  $scope.getFilter = function (someArg) {
    console.log(someArg);
    homePageVm.filter = someArg;
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
