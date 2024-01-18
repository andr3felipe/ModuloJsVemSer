const celsiusTemperature = 35;

function celsiusToFahrenheit(celsiusTemperature: number): string {
  return `${celsiusTemperature}°C é igual a ${
    (celsiusTemperature * 9) / 5 + 32
  }°F`;
}

console.log(celsiusToFahrenheit(celsiusTemperature));
