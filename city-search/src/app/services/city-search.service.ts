import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {

  private _apiKey = 'bad46dfee1ae1125ec4faf31e63449de';
  private _baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getForecastData(cityId): Observable<any> {
    const url = `${this._baseUrl}?id=${cityId}&appid=${this._apiKey}`;
      return this.http.get<any>(url);
  }
}
