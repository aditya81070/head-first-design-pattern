import { Observer } from "./observer";
export interface Subject {
  registerObserver: (o: Observer) => void;
  removeObserver: (o: Observer) => void;
  notifyObserver: () => void;
}
