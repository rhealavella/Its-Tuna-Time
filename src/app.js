function updateTime() {
  let vancouverDateElement = document.querySelector("#vancouver-date");
  vancouverDateElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("ddd MMM Do YYYY");

  let vancouverTimeElement = document.querySelector("#vancouver-time");
  vancouverTimeElement.innerHTML = moment()
    .tz("America/Vancouver")
    .format("hh:mm:ss A");

  let calgaryDateElement = document.querySelector("#calgary-date");
  calgaryDateElement.innerHTML = moment()
    .tz("America/Edmonton")
    .format("ddd MMM Do YYYY");

  let calgaryTimeElement = document.querySelector("#calgary-time");
  calgaryTimeElement.innerHTML = moment()
    .tz("America/Edmonton")
    .format("hh:mm:ss A");

  let torontoDateElement = document.querySelector("#toronto-date");
  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("ddd MMM Do YYYY");

  let torontoTimeElement = document.querySelector("#toronto-time");
  torontoTimeElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("hh:mm:ss A");

  let halifaxDateElement = document.querySelector("#halifax-date");
  halifaxDateElement.innerHTML = moment()
    .tz("America/Halifax")
    .format("ddd MMM Do YYYY");

  let halifaxTimeElement = document.querySelector("#halifax-time");
  halifaxTimeElement.innerHTML = moment()
    .tz("America/Halifax")
    .format("hh:mm:ss A");

  let romeDateElement = document.querySelector("#rome-date");
  romeDateElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("ddd MMM Do YYYY");

  let romeTimeElement = document.querySelector("#rome-time");
  romeTimeElement.innerHTML = moment().tz("Europe/Rome").format("hh:mm:ss A");

  let tokyoDateElement = document.querySelector("#tokyo-date");
  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("ddd MMM Do YYYY");

  let tokyoTimeElement = document.querySelector("#tokyo-time");
  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("hh:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);

function calgaryCurrentWeather() {
  let key = "e9ebt40ac8468b03ff07a7b93c22oc3b";
  let units = "metric";
  let query = "calgary";
  let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}&units=${units}`;
}
