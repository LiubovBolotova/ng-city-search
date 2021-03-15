import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input() set foreCastData(data: {}[]) {
    if (data && data.length) {
      this._forcastTempData = [...data];
    }
  }

  @Input() isForecastDataShown;

  public width: number = 700;
  public view: any[] = [600, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Date';
  public showYAxisLabel = true;
  public yAxisLabel = 'Temperature ℃';
  public colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  private _forcastTempData: {}[] = [];

  constructor() {}

  get foreCastData(): {}[] {
    return this._forcastTempData;
  }
}
