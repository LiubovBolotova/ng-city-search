export interface CityObject {
  id: number,
  name: string,
  state: string,
  country: string,
  coord: {}
}

export interface ForecastTempData {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
}
