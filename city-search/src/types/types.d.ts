export interface ICityObject {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lat: number;
    lon: number;
  };
  timezone: number;
  sunrise: 1578384285,
  sunset: 1578413272
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IForecastTempData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  emp_kf: number;
}

interface IForecastData {
  dt: number;
  main: IForecastTempData;
  weather: IWeather[];
  clouds: {
    [key: string]: number
  };
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number,
  pop: number,
  rain: {
    [key: string]: number
  },
  sys: {
    pod: string
  },
  dt_txt: Date
}


export interface IForecastRespData {
  cod: string;
  message: number;
  cnt: number;
  list: IForecastData[];
  city: ICityObject;
}

export interface IForeCastDataForChart {
  name: string;
  value: number;
}

export interface IChartSettings {
  width: number;
  view: number[];
  showXAxis: boolean;
  showYAxis: boolean;
  gradient: boolean;
  showXAxisLabel: boolean;
  xAxisLabel: string;
  showYAxisLabel: boolean;
  yAxisLabel: string;
  colorScheme: {
  domain: string[];
  };
}
