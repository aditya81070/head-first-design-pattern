import { Subject } from "./interfaces/subject";
import { Observer } from "./interfaces/observer";

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    this.observers = this.observers.filter((obs) => obs.id !== o.id);
  }

  // whenever data is changed, inform observers by calling its update method
  notifyObserver(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }
  // whenever measurements changes, call notify observers to update observers
  measurementsChanged(): void {
    this.notifyObserver();
  }

  // in real life this can be an API call that will fetch latest details and update the weatherData object
  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
