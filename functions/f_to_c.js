function convertFtoC(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
  }

let currentTemp = 92;
let celsiusTemp = convertFtoC(currentTemp);

console.log(`${currentTemp} degrees Fahrenheit = to ${celsiusTemp.toFixed(2)} degrees celsius.`);