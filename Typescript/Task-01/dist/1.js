// 1.ts
var celsiusTemperature = 35;
function celsiusToFahrenheit(celsiusTemperature2) {
  return `${celsiusTemperature2}\xB0C \xE9 igual a ${celsiusTemperature2 * 9 / 5 + 32}\xB0F`;
}
console.log(celsiusToFahrenheit(celsiusTemperature));
