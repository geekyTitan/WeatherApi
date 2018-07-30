//7a97b0d253eeec9536e8f02ecfea85f0
var val;
var inp = document.getElementById('inp');
inp.addEventListener('input',() => {
  val = inp.value;
})

var s = document.getElementById('search');

s.addEventListener('click', function(){


  const url = `http://api.openweathermap.org/data/2.5/weather?q=${val}&APPID=7a97b0d253eeec9536e8f02ecfea85f0&units=metric`;
  //const url = 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=7a97b0d253eeec9536e8f02ecfea85f0';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
      var data = JSON.parse(xhr.responseText);
      console.log(data);

      var obj = document.getElementById('mycontent');
      obj.innerHTML = `<div class="card text-white bg mb-3" style="max-width: 20rem;">
    <div class="card-header">${data.name}</div>
    <div class="card-body">
      <h4 class="card-title">Current Weather</h4>
      <p class="card-text"><strong>Temp : </strong>${data.main.temp} &#176C</p>
      <p class="card-text"><strong>Maximum Temp : </strong>${data.main.temp_max} &#176C</p>
      <p class="card-text"><strong>Minimum Temp : </strong>${data.main.temp_min} &#176C</p>
      <p class="card-text"><strong>Humidity : </strong>${data.main.humidity} </p>
      <p class="card-text"><strong>Pressure : </strong>${data.main.pressure} pA</p>
    </div>
  </div>
  `;
  }

  xhr.send();
});
