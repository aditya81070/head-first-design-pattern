export interface Observer {
  id: string;
  update: (temp: number, humidity: number, pressure: number) => void;
}
