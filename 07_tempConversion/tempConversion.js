const convertToCelsius = function(celcius) {
  let converted = ((celcius - 32) * (5 / 9)).toFixed(1);
  converted = parseFloat(converted);
  return converted

};

const convertToFahrenheit = function(fahrenheit) {
  let converted = ((fahrenheit * (9 / 5) + 32)).toFixed(1);
  converted = parseFloat(converted);
  return converted
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
