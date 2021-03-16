import { Injectable } from '@angular/core';
import { IChartSettings } from "../../types/types";
import { CitySearchService } from "./city-search.service";
import { Destroyable } from "../utils";

@Injectable({
  providedIn: 'root'
})
export class ChartService extends Destroyable {

  private _defaultChartSettings: IChartSettings = {
    width: 700,
    view: [600, 400],
    showXAxis: true,
    showYAxis: true,
    gradient: true,
    showXAxisLabel: true,
    xAxisLabel: 'Date',
    showYAxisLabel: true,
    yAxisLabel: 'Temperature ℃',
    colorScheme: {
      domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
    }
  };

  constructor(private _citySearchService: CitySearchService) {
    super();
  }

  get defaultChartSettings(): IChartSettings {
    return this._defaultChartSettings;
  }

  changeToCelsius(temp: number): number {
    return Math.round(temp - 273.15);
  }

  changeDateFormat(date: Date): string {
    const formatedDate = new Date(date).toLocaleDateString();
    return formatedDate;
  }
}
