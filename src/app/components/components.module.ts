import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchByRegionComponent } from './search-by-region/search-by-region.component';
import { SearchByPaisComponent } from './search-by-pais/search-by-pais.component';
import { SearchByCapitalComponent } from './search-by-capital/search-by-capital.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ResultsCapitalComponent } from './results-capital/results-capital.component';
import { ResultsPaisComponent } from './results-pais/results-pais.component';
import { ResultsRegionComponent } from './results-region/results-region.component';
import { PaisInputComponent } from './pais-input/pais-input.component';
import { CapitalInputComponent } from './capital-input/capital-input.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [
    SearchByRegionComponent,
    SearchByPaisComponent,
    SearchByCapitalComponent,
    VerPaisComponent,
    HomeComponent,
    ResultsCapitalComponent,
    ResultsPaisComponent,
    ResultsRegionComponent,
    PaisInputComponent,
    CapitalInputComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports:[
    SearchByRegionComponent,
    SearchByPaisComponent,
    SearchByCapitalComponent,
    VerPaisComponent,
    HomeComponent,
  ],
})
export class ComponentsModule { }
