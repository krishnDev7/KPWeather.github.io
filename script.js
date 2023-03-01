//////////////////////////////// Declaring variables //////////////////////////////////
let searchBox = document.getElementById("searchedCity");
let submitCity = document.getElementById("submit-city");
let cityName = document.getElementById("city-name");
////////////////////////////////Selecting Elements which we want to show //////////////////////////
let weatherAnimatedImg = document.getElementById("animation");
let currTemperature = document.getElementById("current-temperature");
let maxTemp = document.getElementById("max-temp");
let minTemp = document.getElementById("min-temp");
let weatherMsg = document.getElementById("weather-msg");
let windSpeed = document.getElementById("wind-speed");
let cloudPct = document.getElementById("cloud_pct");
let humidity = document.getElementById("humidity");
let tomorrowAvgTemp = document.getElementById("tom_avgTemp");
let nextDayAvgTemp = document.getElementById("nextDayAvgTemp");
let secondDayAvgTemp = document.getElementById("secondDayAvgTemp");
let tom_minTemp = document.getElementById("tom_min-temp");
let tom_maxTemp = document.getElementById("tom_max-temp");
let nextDay_minTemp = document.getElementById("nextDay_min-temp");
let nextDay_maxTemp = document.getElementById("nextDay_max-temp");
let secondDay_minTemp = document.getElementById("secondDay_min-temp");
let secondDay_maxTemp = document.getElementById("secondDay_max-temp");
let showNextDay = document.getElementById("nextDay");
let showSecondDay = document.getElementById("secondNextDay");
let sunset = document.getElementById("sunset");
let sunrise = document.getElementById("sunrise");
let tomWeatherIcon = document.getElementById("tom-weather-icon");
let nextDayWeatherIcon = document.getElementById("nextDay-weather-icon");
let secondDayWeatherIcon = document.getElementById("secondDay-weather-icon");

let weatherGreetingMsg = {
  tooCold: [
    "Too cool to be here today",
    "Weather is As cool as our Captain Cool",
    "It's too cold outside,Stay inside",
    "In this terrible cold,Hope you have your warm clothes",
  ],
  mildCold: [
    "It's cold outside, wear your warm clothes",
    "Little bit of cold here",
    "Mild Coold, Do exercise to keep yourself Active",
    "Although Not too much cold,But avoid staying outside",
    "Mild cold, stay away from ice-cream",
  ],
  mildHot: [
    "It's hot outside, be careful with sun",
    "Mild hot outside, do your movements infront of AC",
    "weather is little bit hot than usual",
    "Temperature is pretty hot but not too worry about"
  ],
  tooHot: [
    "It's too hot outside,Stay inside",
    "Weather is terribly hot",
    "Unbearable Hotness outside, Turn your AC/Fan on",
    "temperature is too high, Do your movements infront of Fan",
    "Atmosphere is too Hot to be outside",
  ],
  average: [
    "Good to Go chief!",
    "Temperature is good enough to do your work",
    "The Perfect time to do your work",
    "Atmosphere is as per as your expectations",
    "Such a lovely weather",
  ],
};
//////////////////////////////Utility Function for showing Random Weather messages to User////////////////////////////
let randomNumber = (arr) => Math.floor(Math.random() * arr.length);

function showWeatherGreetingMsg(temp) {
  if (temp <= 10) {
    weatherMsg.textContent =
      weatherGreetingMsg.tooCold[randomNumber(weatherGreetingMsg.tooCold)];
  } else if (temp > 10 && temp <= 17) {
    weatherMsg.textContent =
      weatherGreetingMsg.mildCold[randomNumber(weatherGreetingMsg.mildCold)];
  } else if (temp > 17 && temp <= 28) {
    weatherMsg.textContent =
      weatherGreetingMsg.average[randomNumber(weatherGreetingMsg.average)];
  } else if (temp > 28 && temp <= 37) {
    weatherMsg.textContent =
      weatherGreetingMsg.mildHot[randomNumber(weatherGreetingMsg.mildHot)];
  } else if (temp > 37) {
    weatherMsg.textContent =
      weatherGreetingMsg.tooHot[randomNumber(weatherGreetingMsg.tooHot)];
  } else {
    weatherMsg.textContent = "Nothing to show here";
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////Utility function for changing city name and adding it to a value //////////////////////////////////
function changeCity() {
  if (searchBox.value) {
    cityName.textContent = searchBox.value;
  } else {
    alert("PLEASE ENTER ANY CITY");
  }

  function sidhpur() {
    if (
      searchBox.value == "siddhpur" ||
      searchBox.value == "Siddhpur" ||
      searchBox.value == "Sidhpur" ||
      searchBox.value == "sidhpur"
    ) {
      return (searchBox.value = "Sidhpur,Gujarat");
    }
  }
  sidhpur();
}
submitCity.addEventListener("click", changeCity);
searchBox.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    changeCity();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// Utility function for changing background //////////////////////////////////////

function changeBg(is_day, cloud, rain, snow) {
  if (is_day && snow) {
    document.body.style.background = " url(./img/snow.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    weatherAnimatedImg.src = "./animated/snowy-1.svg";
  } else if(!is_day && snow){
    document.body.style.background = " url(./img/snow.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    weatherAnimatedImg.src = "./animated/snowy-5.svg";
  } else if (rain) {
    document.body.style.background = " url(./img/rainy.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    weatherAnimatedImg.src = "./animated/rainy-1.svg";
  } else if (is_day && cloud > 50) {
    document.body.style.background = " url(./img/Cloudy.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    weatherAnimatedImg.src = "./animated/cloudy-day-2.svg";
  } else if (!is_day && cloud > 50) {
    document.body.style.background = " url(./img/Cloudy.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    weatherAnimatedImg.src = "./animated/cloudy-night-2.svg";
  } else if (!is_day) {
    document.body.style.background = " url(./img/night.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    weatherAnimatedImg.src = "./animated/night.svg";
  } else if (is_day) {
    document.body.style.background = " url(./img/sunny.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    weatherAnimatedImg.src = "./animated/day.svg";
  }
}

function changeBgForMobile(x, is_day, cloud, rain, snow) {
  if (x.matches) {
    if (snow) {
      document.body.style.background = " url(./img/snow-mobile.webp)";
      document.body.style.backgroundSize = "600px";
      document.body.style.backgroundRepeat = "no-repeat";
      weatherAnimatedImg.src = "./animated/snowy-1.svg";
    } else if (rain) {
      document.body.style.background = " url(./img/rainy-phone.jpg)";
      document.body.style.backgroundSize = "600px";
      document.body.style.backgroundRepeat = "no-repeat";
      weatherAnimatedImg.src = "./animated/rainy-1.svg";
    } else if (is_day && cloud > 20) {
      document.body.style.background = " url(./img/cloudy-phone.jpg)";
      document.body.style.backgroundSize = "600px";
      document.body.style.backgroundRepeat = "no-repeat";
      weatherAnimatedImg.src = "./animated/cloudy-day-2.svg";
    } else if (!is_day && cloud > 20) {
      document.body.style.background = " url(./img/cloudy-phone.jpg)";
      document.body.style.backgroundSize = "600px";
      document.body.style.backgroundRepeat = "no-repeat";
      weatherAnimatedImg.src = "./animated/cloudy-night-2.svg";
    } else if (!is_day) {
      document.body.style.background = " url(./img/night-phone.jpg)";
      document.body.style.backgroundSize = "600px";
      document.body.style.backgroundRepeat = "no-repeat";
      weatherAnimatedImg.src = "./animated/night.svg";
    } else if (is_day) {
      document.body.style.background = " url(./img/sunny-phone.jpg)";
      document.body.style.backgroundSize = "600px";
      document.body.style.backgroundRepeat = "no-repeat";
      weatherAnimatedImg.src = "./animated/day.svg";
    }
  } else {
    changeBg(is_day, cloud, rain, snow);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function changeAnimation(rain, snow, weatherIcon) {
  if (snow) {
    weatherIcon.src = "./animated/snowy-1.svg";
  } else if (rain) {
    weatherIcon.src = "./animated/rainy-1.svg";
  }else {
    weatherIcon.src = "./animated/day.svg";
  }
}

let today = new Date();
let t = today.getDate();
let tomorrow = today + 1;
let nextDate = new Date();
nextDate.setDate(t + 2);
let nextDay = nextDate.getDay();
let secondDate = new Date();
secondDate.setDate(t + 3);
let secondDay = secondDate.getDay();
let day;

function dayDisplay(DAY) {
  switch (DAY) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
  }
  return day;
}

showNextDay.textContent = dayDisplay(nextDay);
showSecondDay.textContent = dayDisplay(secondDay);

function showWeather() {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=bf740acd7cb541848b243040232502&q=${searchBox.value}&days=4&aqi=no&alerts=no`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      /////////////////////// Assignment of Values in UI //////////////////////
      currTemperature.textContent = Number(Math.round(data.current.temp_c));
      maxTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[0].day.maxtemp_c
      )}&deg;`;
      minTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[0].day.mintemp_c
      )}&deg;`;
      windSpeed.textContent = Math.round(data.current.wind_kph);
      cloudPct.textContent = Math.round(
        data.forecast.forecastday[0].day.daily_chance_of_rain
      );
      humidity.textContent = Math.round(data.current.humidity);
      tomorrowAvgTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[1].day.avgtemp_c
      )}&deg;`;
      nextDayAvgTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[2].day.avgtemp_c
      )}&deg;`;
      secondDayAvgTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[3].day.avgtemp_c
      )}&deg;`;
      tom_maxTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[1].day.maxtemp_c
      )}&deg;`;
      tom_minTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[1].day.mintemp_c
      )}&deg;`;
      nextDay_maxTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[2].day.maxtemp_c
      )}&deg;`;
      nextDay_minTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[2].day.mintemp_c
      )}&deg;`;
      secondDay_maxTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[3].day.maxtemp_c
      )}&deg;`;
      secondDay_minTemp.innerHTML = `${Math.round(
        data.forecast.forecastday[3].day.mintemp_c
      )}&deg;`;
      showWeatherGreetingMsg(currTemperature.textContent);
      let is_day = data.current.is_day;
      let cloud = data.current.cloud;
      let rain = data.forecast.forecastday[0].day.daily_will_it_rain;
      let snow = data.forecast.forecastday[0].day.daily_will_it_snow;
      let rainTom = data.forecast.forecastday[1].day.daily_will_it_rain;
      let snowTom = data.forecast.forecastday[1].day.daily_will_it_snow;
      let rainNext = data.forecast.forecastday[2].day.daily_will_it_rain;
      let snowNext = data.forecast.forecastday[2].day.daily_will_it_snow;
      let rainSecond = data.forecast.forecastday[3].day.daily_will_it_rain;
      let snowSecond = data.forecast.forecastday[3].day.daily_will_it_snow;
      let x = window.matchMedia("(max-width: 430px)");
      changeBgForMobile(x, is_day, cloud, rain, snow);
      x.addListener(changeBgForMobile);
      changeAnimation(rainTom, snowTom, tomWeatherIcon);
      changeAnimation(rainNext, snowNext, nextDayWeatherIcon);
      changeAnimation(rainSecond, snowSecond, secondDayWeatherIcon);
    })
    
}

let weather = {
  showWeatherOnClick: submitCity.addEventListener("click", showWeather),
  DisplayWeatherOnEnter: searchBox.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      showWeather();
    }
  }),
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// Notes: to be asked for knowledge ////////////////////////////////////////