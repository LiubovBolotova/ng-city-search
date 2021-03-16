import { Component, Input } from '@angular/core';
import { IChartSettings, IForeCastDataForChart } from "../../types/types";
import { ChartService } from "../services/chart.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input() set foreCastData(data: IForeCastDataForChart[]) {
    if (data && data.length) {
      this._forcastTempData = [...data];
    }
  }

  @Input() isForecastDataShown: boolean;

  public chartSettings: IChartSettings = this.chartService.defaultChartSettings;

  private _forcastTempData: IForeCastDataForChart[] = [];

  constructor(private chartService: ChartService) {}

  get foreCastData(): IForeCastDataForChart[] {
    return this._forcastTempData;
  }
}
