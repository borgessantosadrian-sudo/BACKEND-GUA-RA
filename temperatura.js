//conversor de temperaturas 
const cidade = "curitiba";
let tempCelsius = 18.5;

const tempFahrenheit = tempCeslsius * (9/5) + 32;
const tempKelvin = tempCeslsius + 273.15;
console.log(`aA temperaturade ${cidade} está ${tempCelsius} Cº`);
console.log(`fahrenheit: ${tempFahrenheit.toFixed(1)} fº`);
console.log(`kelvin: ${tempKelvin.toFixed(1)}kº`);