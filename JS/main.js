

async function search(finalReq){
  let req =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=63360ea905134eb7ab1141631242706&q=${finalReq}&days=3`)
  
  finalReq = await req.json();

    displayCurrent(finalReq.location,finalReq.current)
    displaySec(finalReq.forecast.forecastday)
    displayThird(finalReq.forecast.forecastday)

};

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displayCurrent(l,c){
if(c != null){
  let e = new Date(c.last_updated.replace(" ","T"))
  let content = ` <div class="date d-flex justify-content-between  rounded-3 ">
  <p class="day">${days[e.getDay()]}</p>
  <p class="day-date">${e.getDate() + months[e.getMonth()]}</p>
</div>
<div class="degree-content  p-4 ">
  <p>${l.name}</p>
  <div class="degree">
    ${c.temp_c}<sup>o</sup>C
  </div>
  <img src="${c.condition.icon}" alt="" class="stat-img">
  <p class="stat">${c.condition.text}</p>
  <span>
    <img src="./images/icon-umberella.png" alt="">
    ${c.humidity}%
  </span>

  <span><img src="./images/icon-wind.png" alt=""> ${c.wind_kph} km/h</span>

  <span><img src="./images/icon-compass.png" alt=""> ${c.wind_dir}</span>
</div>`

document.querySelector(".today").innerHTML = content
}
}

document.querySelector(".search-input").addEventListener("keyup",function(finalReq){
search(finalReq.target.value)

})


function displaySec(f){
  let content =""

  
    content += `<div class="date d-flex    ">
                <p class="day">${days[new Date(f[1].date.replace(" ","T")).getDay()]}</p>
              </div>
              <div class="about-degree d-flex justify-content-center align-items-center text-center flex-column pt-5">
                <img src="${f[1].day.condition.icon}" alt="" class="stat-img ">
              <div class="degree-content  p-4 ">
                <div class="bigger-degree">
                  ${f[1].day.maxtemp_c}<sup>o</sup>C
                </div>
                <div class="smaller-degree mb-3">
                  ${f[1].day.mintemp_c}<sup>o</sup>
                </div>
                <p class="other-stat">${f[1].day.condition.text}</p>
              </div>
              </div>`

              document.querySelector(".tomorrow").innerHTML = content
  
}


function displayThird(f){
  let content =""

  
    content += `<div class="date d-flex    ">
                  <p class="day">${days[new Date(f[2].date.replace(" ","T")).getDay()]}</p>
                </div>
                <div class="about-degree d-flex justify-content-center align-items-center text-center flex-column pt-5">
                  <img src="${f[2].day.condition.icon}" alt="" class="stat-img ">
                <div class="degree-content  p-4 ">
                  <div class="bigger-degree">
                    ${f[2].day.maxtemp_c}<sup>o</sup>C
                  </div>
                  <div class="smaller-degree mb-3">
                    ${f[2].day.mintemp_c}<sup>o</sup>
                  </div>
                  <p class="other-stat">${f[2].day.condition.text}</p>
                </div>
                </div>`

              document.querySelector(".third-day").innerHTML = content
  
}




search("Cairo")




