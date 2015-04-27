(function() {
  'use strict';

  angular.module('demoApp', ['ui.tree','vs-repeat'])
  .controller('MainCtrl', function($scope) {

    $scope.selectedItem = {};

    $scope.options = {
    };
    
    $scope.addData = function(scope) {      
      //$scope.list = data_eight;
      //$scope.list = data_one_hundred;
      $scope.list = data_one_thou;
      //$scope.list = data_ten_thou;
    }
    
    $scope.removeAll = function(scope) {      
      $scope.list = null;
    }

    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      scope.toggle();
    };

    $scope.newSubItem = function(scope) {
      var nodeData = scope.$modelValue;
      nodeData.items.push({
        id: nodeData.id * 10 + nodeData.items.length,
        title: nodeData.title + '.' + (nodeData.items.length + 1),
        items: []
      });
    };
  });

})();