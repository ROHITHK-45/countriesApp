function fetchData(){
    let countryName=country_name.value;

    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).
    then(res=>res.json()).
    then(data=>populateValues(data))
}


function populateValues(country){
    // countryname
    // flag
    // population
    // currencyname
    // currency symbol
    // languge
    // capital
    // console.log(country[0]);
    let countryName=country[0].name;
    let countryFlag=country[0].flag
    let countryPopulation=country[0].population;
    let countryCurrName=country[0].currencies[0].name;
    let countryCurrSymbol=country[0].currencies[0].symbol;
    let countryLang=country[0].languages[0].name;
    let html_data=`<div class="card" style="width: 18rem;">
    <img src="${countryFlag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Countryname:${countryName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Population:${countryPopulation}</li>
      <li class="list-group-item">Currency:${countryCurrName}</li>
      <li class="list-group-item">Symbol:${countryCurrSymbol}</li>
    </ul>
    
  </div>`
  
  document.querySelector("#result").innerHTML=html_data
}


// function selectCountry(){
//   let countryName=country_name.value;

//   fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).
//   then(res=>res.json()).
//   then(data=>populateValues(data))
// }

