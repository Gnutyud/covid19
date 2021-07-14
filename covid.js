const globalBtn = document.querySelector(".global");
const vietnamBtn = document.querySelector(".vietnam");
const infoContainer = document.querySelector(".info");
var htmlGlobal = "";
const covidData = async function (countryName) {
  const res = await fetch("https://corona.lmao.ninja/v2/countries");
  const data = await res.json();
  // console.log(data);
  if (countryName) {
    htmlGlobal = "";
    var finalData = await data.filter(
      (country) => country.country == countryName,
    );
  } else {
    htmlGlobal = "";
    var finalData = await data;
  }
  await finalData.forEach((country) => {
    htmlGlobal += `
    <div class="card col-3 p-0" style="width: 18rem">
    <img height="190" src="${country.countryInfo.flag}" class="card-img-top" />
    <div class="card-body">
        <h5 class="card-title">${country.country}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Total Cases : ${country.cases}</li>
        <li class="list-group-item">Total Deaths : ${country.deaths}</li>
        <li class="list-group-item">Today Cases : ${country.todayCases}</li>
        <li class="list-group-item">Today Deaths : ${country.todayDeaths}</li>
    </ul>
</div>
    `;
  });
  infoContainer.innerHTML = htmlGlobal;
};
globalBtn.addEventListener("click", function () {
  covidData("");
});
vietnamBtn.addEventListener("click", function () {
  covidData("Vietnam");
});
