import { CurrentConditionDisplay } from "./displays/current-condition-display";
import { WeatherData } from "./weather-data";

const weatherData: WeatherData = new WeatherData();

const currentDisplay: CurrentConditionDisplay = new CurrentConditionDisplay(
  weatherData
);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
