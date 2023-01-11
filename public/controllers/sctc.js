


sctcApp.controller("sctcController", function($scope, $http, $routeParams) {
    // Controller for home view
  
    // event handler for the search button
    // $http.get() to your search endpoint
    // the result will be an array of objects, assign this to a scope var
    // $scope.searchResults = ...
    $scope.title = "SC Tennis Club Membership"
  
    $scope.members = []
    $scope.addMembers = () => {
      
            $scope.members.push({ fname: "Stacia", lname: "Kato", ntrp: "W3.5" })
            $scope.members.push({ fname: "Wendy", lname: "Murakami", ntrp: "W3.5" })
            $scope.members.push({ fname: "Karen", lname: "Wu", ntrp: "W4.0" })
            $scope.members.push({ fname: "Josh", lname: "Johnston", ntrp: "M.5" })
            $scope.members.push({ fname: "**** hard-coded", lname: " data ****", ntrp: "* above here " })
        
    }
  
    $http.get("/api/sctc").then(function(result) {
      //    console.log(result)
      //    $scope.sctcdata = [{fname: "Sal" , lname: "Lee" , ntrp:"M4.5"} ]//result
  
      /*
          $scope.info1 = "from end point"
          $scope.info2 = "2nd"
          $scope.info3 = result.data
      */
  
      //    $scope.sctcdata = []
      //    $scope.sctcdata.push({ fname: "Sal", lname: "Lee", ntrp: "M4.5" })
  
      $scope.sctcdata = result.data
  
  
    }).catch(function(error) {
      console.log(error)
  
    })
  
  
  
    // $scope.addMembers()
    $scope.init = () => {
      $scope.addMembers()
  
    }
  
  
  
  
  
  
  });