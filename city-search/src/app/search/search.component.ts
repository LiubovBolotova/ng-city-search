import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JsonService } from "../services/json.service";
import { FormControl } from "@angular/forms";
import { CityObject } from "../../types/types";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchByCityId = new EventEmitter<number>();

  public citiesData: CityObject[];
  public searchControl = new FormControl(null);
  public notFoundMessageIsShown = false;
  public noCityMessage: string = 'No such city. Please try again';

  constructor(
    private jsonService: JsonService) {
  }

  ngOnInit(): void {
    this.jsonService.getCities()
      .subscribe((data: any): void => {
        this.citiesData = data;
      });
    this.searchControl.valueChanges.subscribe(value => {
      this.notFoundMessageIsShown = false;
    })
  }

  public searchByCity(value) {
    let cityObject = this.citiesData.find((item) => item.name.toLowerCase() === value.toLowerCase());
    if (cityObject) {
      this.searchByCityId.emit(cityObject.id)
    } else {
      this.searchByCityId.emit(null)
      this.notFoundMessageIsShown = true
    }
  }
}
