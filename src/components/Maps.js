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
    
      //Add markers

      data.results.forEach((place) => {
        new google.maps.Marker({
          position: place.geometry.location,
          map,
          title: place.name,
        });
   
      });
    })
    .catch((err) => console.log(err));
};

function addToList(data){
  data.results.forEach((place)=>{

// Add elements to site
const card = document.createElement(`div`);
const imgEl = document.createElement(`img`);
const heading = document.createElement(`h2`);
const ratingEl = document.createElement(`p`);
const hr = document.createElement(`hr`);
const address = document.createElement(`p`);
const placesDiv = document.querySelector(`#places-list`);
placesDiv.appendChild(card);
imgEl.src = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w` ;
placesDiv.appendChild(imgEl);
heading.textContent = place.name;
placesDiv.appendChild(heading);
ratingEl.textContent = place.rating;
placesDiv.appendChild(ratingEl);
address.textContent = place.vicinity;
placesDiv.append(address);
placesDiv.appendChild(hr);

  })
}
// City input
document.querySelector("#searchCity").addEventListener("click", (e) => {
  let city = document.getElementById("city").value;
  newLocation(city);
});