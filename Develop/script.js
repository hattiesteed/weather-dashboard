// api key 98cc20ce5aa0b82e2cd1d17c1146fc28
// https://api.openweathermap.org/data/2.5/weather?q=

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
var city = "farmington";
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=98cc20ce5aa0b82e2cd1d17c1146fc28`, requestOptions)
        .then(response => response.json())
        .then(result => {
    // todo 
    var lat = 44;
    var lon = 31;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=98cc20ce5aa0b82e2cd1d17c1146fc28`, requestOptions)
        .then(response => response.json())
        .then(result => {
          
// todo
    console.log(result)
        })
        .catch(error => console.log('error', error));
    })
  .catch(error => console.log('error', error));



  
  


