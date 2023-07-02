let map;

function newPlace(city) {
  if (city) {
    //Receive lat and Long
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}do&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w`,
      {
        method: "GET",
        dataType: "jsonp",
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((city) => {
        let lat = city.results[0].geometry.location.lat;
        let long = city.results[0].geometry.location.lng;

        // Send to Google API 
        googleMaps(lat, long);
        getLocation(lat, long);
      });
  }
}

function getPositions(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  googleMaps(lat, long);
  getLocation(lat, long);
}

function googleMaps(lat, long) {
  map = new google.maps.Map(document.getElementById("maps"), {
    center: { lat: lat, lng: long },
    zoom: 10,
  });
}

const getLocation = (lat, long, type , keyword) => {
  let url = `https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=50000&type=${type}&keyword=${keyword}&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w`;

  fetch(url, {
    method: "GET",
    dataType: "jsonp",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
    
      //Add marker to map
      console.log(data)
      data.results.forEach((location) => {
        new google.maps.Marker({
          position: location.geometry.location,
          map,
          title: location.name,
        });
        console.log(location)
      });
    })
    .catch((err) => console.log(err));
};
