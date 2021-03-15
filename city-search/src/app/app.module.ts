import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ChartComponent } from './chart/chart.component';
import { JsonService } from './services/json.service';
import { CitySearchService } from "./services/city-search.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../material-module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CitySearchService, JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
