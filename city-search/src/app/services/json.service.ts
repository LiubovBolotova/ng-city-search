import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable()
export class JsonService {
  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get('../assets/city.list.json');
  }
}
