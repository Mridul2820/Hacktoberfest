
/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. delhi,in)*/

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const history_component = document.querySelector(".histories");
if(localStorage.getItem("city")==null){
  localStorage.setItem("city",JSON.stringify([]));
}
else{
  getHistory();
}

let itemsarr=[];
const apiKey = "c04c3caadc664aece3b002cdccd32292";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;
  
  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = "";
      //delhi,in
      if (inputVal.includes(",")) {
        //delhi,innnnn->invalid country code, so we keep only the first part of inputVal
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        //athens
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `Weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } is already shown...if you want another city please provide country as well`;
      form.reset();
      input.focus();
      return;
    }
  }

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const {
        main,
        name,
        sys,
        weather
      } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
// how to make object in javascript
      let tempobj={
        "cityname":name,
        "timestamp":new Date().toLocaleTimeString(),
        "temperature":`${Math.round(main.temp)} °C`
      }
      console.log("tempobj",tempobj);
      let newarr=[];
      if(localStorage.getItem("city")===null)
     { 
    localStorage.setItem("city",JSON.stringify([tempobj]));
    }
      else
      { newarr=JSON.parse (localStorage.getItem("city"));
        localStorage.setItem("city",JSON.stringify([tempobj,...newarr]));
      }
      getHistory();
    })
    .catch((err) => {
      msg.textContent = err;
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});


function getHistory(){
let historydata=JSON.parse(localStorage.getItem("city"));
console.log(historydata);
history_component.textContent="";
//for each loop in javascript
historydata.forEach((item)=>{
  const history_obj=`
  <div class=history_div>
  <p>${item.cityname}</p> <p>${item.temperature}</p> <p>${item.timestamp}</p>
  </div>
  ` ;
  const linew = document.createElement("li");
  linew.classList.add("history_city");
  linew.innerHTML=history_obj;
  history_component.appendChild(linew);

});
}



