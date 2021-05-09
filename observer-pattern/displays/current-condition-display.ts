import { DisplayElement } from "../interfaces/display-element";
import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";
import { v4 as uuidV4 } from "uuid";
export class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: number | undefined;
  private humidity: number | undefined;
  public id: string;
  // storing weatherDat object so we can use it to un-register observer in future
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    // this id is required to identify each observer uniquely
    this.id = uuidV4();
    this.weatherData = weatherData;
    // register the observer
    weatherData.registerObserver(this);
  }

  // observers update method that will be called on change
  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  // display the current conditions
  display(): void {
    console.log(
      "Current conditions",
      this.temperature,
      "F degrees and ",
      this.humidity,
      "% humidity"
    );
  }
}
