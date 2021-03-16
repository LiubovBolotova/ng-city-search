import { Component, OnDestroy, OnInit } from '@angular/core';
import { Destroyable } from "./utils";
import { IForecastData, IForeCastDataForChart, IForecastRespData } from "../types/types";
import { ChartService } from "./services/chart.service";
import { CitySearchService } from "./services/city-search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Destroyable implements OnInit, OnDestroy {

  public forcastTempData: IForeCastDataForChart[] = [];
  public isForecastDataShown: boolean = false;

  constructor(private chartService: ChartService, private _citySearchService: CitySearchService) {
    super()
  }

  ngOnInit(): void {
  }

  public createChartByCity(id: number) {
    this.getTempDataForChart(id);
  }

  get foreCastData(): IForeCastDataForChart[] {
    return this.forcastTempData;
  }

  set foreCastData(value: IForeCastDataForChart[]) {
    this.forcastTempData = [...value];
  }

  private getTempDataForChart(id: number) {
    let newForecastArray: IForeCastDataForChart[] = [];
    if (id != null) {
      this._citySearchService.getForecastData(id)
        .pipe(
          this.takeUntilDestroyed(),
        ).subscribe((data: IForecastRespData) => {
        data.list.forEach((item: IForecastData) => newForecastArray.push({
          value: this.chartService.changeToCelsius(item.main.temp),
          name: this.chartService.changeDateFormat(item['dt_txt'])
        }));
        this.foreCastData = newForecastArray;
        this.isForecastDataShown = true;
      })
    } else {
      this.isForecastDataShown = false;
    }
  }
}
