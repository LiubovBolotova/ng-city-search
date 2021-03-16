import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ICityObject } from "../../types/types";
import { CitySearchService } from "../services/city-search.service";
import { Destroyable } from "../utils";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends Destroyable implements OnInit {
  @Output() searchByCityId = new EventEmitter<number>();

  public citiesData: ICityObject[];
  public searchControl = new FormControl(null);
  public notFoundMessageIsShown = false;
  public noCityMessage: string = 'No such city. Please try again';

  constructor(
    private citySearchService: CitySearchService) {
    super();
  }

  ngOnInit(): void {
    this.citySearchService.getCities()
      .pipe(this.takeUntilDestroyed())
      .subscribe((data: ICityObject[]): void => {
        this.citiesData = data;
      });
    this.searchControl.valueChanges
      .pipe(this.takeUntilDestroyed())
      .subscribe(value => {
      this.notFoundMessageIsShown = false;
    })
  }

  public searchByCity(value: string) {
    let cityObject = this.citiesData.find((item: ICityObject) => item.name.toLowerCase() === value.toLowerCase());
    if (cityObject) {
      this.searchByCityId.emit(cityObject.id)
    } else {
      this.searchByCityId.emit(null)
      this.notFoundMessageIsShown = true
    }
  }
}
