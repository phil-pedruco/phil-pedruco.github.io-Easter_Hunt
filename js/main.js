

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function clue_one() {
  var x = document.getElementById("clue_one_text").value;
    if (x == 'The_Easter_Hunt') {
    	sleep(500)
    	document.getElementById("clue_one_response").innerHTML = 'The correct code has been entered';
    	location.replace("clue_one.html")//window.location.href = "clue_one.html";
  	} else {
    	document.getElementById("clue_one_response").innerHTML = 'You might want to try again';
  	}
}

function clue_two() {
  var x = document.getElementById("clue_two_text").value;
    if (x == '150m') {
    	sleep(500)
    	document.getElementById("clue_two_response").innerHTML = 'The correct code has been entered';
    	location.replace("clue_two.html")//window.location.href = "clue_one.html";
  	} else {
    	document.getElementById("clue_two_response").innerHTML = 'You might want to try again';
  	}
}

function clue_three() {
  var x = document.getElementById("clue_three_text").value;
    if (x == 'ZSAS') {
    	sleep(500)
    	document.getElementById("clue_three_response").innerHTML = 'The correct code has been entered';
    	location.replace("clue_three.html")//window.location.href = "clue_one.html";
  	} else {
    	document.getElementById("clue_three_response").innerHTML = 'I couldn&apost read it either, just enter ZSAS';
  	}
}

function clue_four() {
  var x = document.getElementById("clue_four_text").value;
    if (x == 'Godfrey') {
    	sleep(500)
    	document.getElementById("clue_four_response").innerHTML = 'The correct code has been entered';
    	location.replace("clue_four.html")//window.location.href = "clue_one.html";
  	} else {
    	document.getElementById("clue_four_response").innerHTML = 'Best try again';
  	}
}

function clue_five_yes() {
  document.getElementById("clue_five_yes_no").innerHTML = 'Good choice';
  sleep(500)
  location.replace("clue_five.html")//window.location.href = "clue_one.html";
}

function clue_five_no() {
  document.getElementById("clue_five_yes_no").innerHTML = 'Are you sure? Remember the more clues you get right, the more eggs you get.';
  sleep(500)
}

function clue_six() {
  var x = document.getElementById("clue_six_text").value;
    if (x == 'Bouncer') {
      sleep(500)
      document.getElementById("clue_six_response").innerHTML = 'The correct code has been entered';
      location.replace("clue_six.html")//window.location.href = "clue_one.html";
    } else {
      document.getElementById("clue_six_response").innerHTML = 'Best try again';
    }
}

/*function myMap() {
var mapProp= {
  center:new google.maps.LatLng(-37.7754445,144.920387),
  zoom:18,
}
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}*/

function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('googleMap'), {
          center: {lat: -37.7754445, lng: 144.920387},
          zoom: 18,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }


//https://www.google.com/maps/place/Rothwell+Park/@-37.7755993,144.9185577,17z/data=!4m5!3m4!1s0x6ad65cfece6b7585:0x5088375a3f09ea83!8m2!3d-37.7751623!4d144.9206778