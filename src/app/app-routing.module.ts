import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByRegionComponent } from './components/search-by-region/search-by-region.component';
import { SearchByCapitalComponent } from './components/search-by-capital/search-by-capital.component';
import { SearchByPaisComponent } from './components/search-by-pais/search-by-pais.component';
import { VerPaisComponent } from './components/ver-pais/ver-pais.component';
import { HomeComponent } from './components/home/home.component';
import { PaisResolver } from './resolvers/pais.resolver';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: 'region', component: SearchByRegionComponent },
  { path: 'pais', component: SearchByPaisComponent, pathMatch: 'full' },
  { path: 'capital', component: SearchByCapitalComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'pais/:name',
    component: VerPaisComponent,
    resolve: { pais: PaisResolver },
  },
  { path: '404', component: Error404Component},
  { path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
