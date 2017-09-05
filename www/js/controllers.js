angular.module('app.controllers', ['ngStorage'])
     
.controller('mapCtrl', ['$scope', 'uiGmapGoogleMapApi','$localStorage', function($scope, uiGmapGoogleMapApi, $stateparams,$window,$localStorage) {

 //console.log(window.localStorage);

var array = JSON.parse(localStorage.getItem("ngStorage-response"));
console.log(array[5].straatnaam)

function addInfoWindow(marker, message) {

            var infoWindow = new google.maps.InfoWindow({
                content: message
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        }

var mapOptions = {
        zoom: 13,
        center:new google.maps.LatLng(51.2192, 4.4029),  
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.mymapdetail = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    //add marker
       for (var i = 0, length = array.length; i < length; i++) {
    $scope.mymarker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        map: $scope.mymapdetail,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(array[i].point_lat, array[i].point_lng),
        title: array[i].straatnaam
    });
    addInfoWindow($scope.mymarker, array[i].straatnaam);

    }  

  
}])
   
    .controller('VeloCtrl', function(VeloData, $scope, $localStorage) {
        
            VeloData.getVeloData()
                .then(function(response){
                $localStorage.response = response.data; 
           
                    console.log(response.data)
                    
                    console.log("object5: " + response.data[5]);
            

                 
                },function(error){
                    console.log(error)
                })

                $scope.formatNumber = function(i) {
                    return Math.round(i * 100)/100; 
            }
            
                $scope.VeloDataStorage = $localStorage.response;
      

                 console.log ("Data werkt wel " +  $localStorage.response)
                 
            })




