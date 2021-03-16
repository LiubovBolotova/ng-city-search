import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CitySearchService {

  private _apiKey = environment._apiKey;
  private _baseUrl = environment._baseUrl;

  constructor(private http: HttpClient) { }

  getForecastData(cityId): Observable<any> {
    const url = `${this._baseUrl}?id=${cityId}&appid=${this._apiKey}`;
      return this.http.get<any>(url);
  }

  getCities() {
    return this.http.get('../assets/city.list.json');
  }
}
