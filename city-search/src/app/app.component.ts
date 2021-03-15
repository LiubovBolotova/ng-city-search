import { Component, OnDestroy, OnInit } from '@angular/core';
import { CitySearchService } from "./services/city-search.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public forcastTempData: {}[] = [];
  private _destroyed = new Subject();
  public isForecastDataShown: boolean = false;

  constructor(private citySearchService: CitySearchService) {}

  ngOnInit(): void {}

  public createChartByCity(id: number) {
    this.getTempDataForChart(id)
  }

  get foreCastData(): {}[] {
    return this.forcastTempData;
  }

  set foreCastData(value: {}[]) {
    this.forcastTempData = value;
  }

  getTempDataForChart(id: number) {
   if(id != null) {
     this.citySearchService.getForecastData(id)
       .pipe(
         takeUntil(this._destroyed)
       ).subscribe((data) => {
       let newForecastArray = [];
       data.list.forEach((item) => newForecastArray.push({
         value: this.changeToCelsius(item.main.temp), name: this.changeDateFormat(item['dt_txt'])
       }));
       this.foreCastData = [...newForecastArray];
       this.isForecastDataShown = true
     })
   }
   else {
     this.isForecastDataShown = false;
   }
  }

  private changeToCelsius(temp: number): number {
      return Math.round(temp - 273.15);
  }

  private changeDateFormat(date: Date): string {
    const formatedDate = new Date(date).toLocaleDateString();
    return formatedDate;
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
