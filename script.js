async function flagfromcountries() {
 
    let res = await fetch("https://restcountries.com/v2/all");
    var result = await res.json();

    for (var i = 0; i <= result.length; i++) {
      var l = result[i].latlng[0];
      var lg = result[i].latlng[1];     
      var name = result[i].name;
      var div = document.createElement("div");
      div.setAttribute("class", "col-md-4");
      div.innerHTML = ` <div class="box-part text-center"> 
            <h2>${result[i].name}</h2>
         <img calss="inner-image portrait" src=${result[i].flags.png} alt=" ">
         
         <h3>Capital:${result[i].capital}</h3>
         <h3>Region:${result[i].region}</h3>
         <h3>Country Code:${result[i].alpha3Code}</h3>
         <button type="button" onclick="Checkwheather(${l},${lg})">Check For Whether</button>
         </div>`
      var a = document.querySelector(".row");
      a.append(div);
    }
    
 
}

flagfromcountries();
async function Checkwheather(lat, lng) {

  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e31177adae96164558b42eca7ef526f7`;
  var map = await fetch(url);
  var output = await map.json();
  var pop = document.createElement("div");
  pop.setAttribute("class", "popup");
  pop.innerHTML = `<div class="card-body">
<h2>Wheather Details</h2>
<h5>${output.name} Wheather Details</h5>
<hr>
<p class="card-text">Temperature:${output.main.temp}<sup>.</sup>F</p>
<p class="card-text">Pressure:${output.main.pressure}</p>
<p class="card-text">Wind Speed:${output.wind.speed}km/hr</p>
<p class="card-text">Humidity:${output.main.humidity}g/kg</p>
<p class="card-text">Wind Degree:${output.wind.deg} deg</p>
<button class="close" type="btn" onclick="foo()">Close</button>
</div>`
  var b = document.querySelector(".row");
  b.append(pop);
}

function foo() {
 var re= document.querySelector('.popup');
  re.remove();

}