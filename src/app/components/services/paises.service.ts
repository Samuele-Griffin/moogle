import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pais } from '../../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public paises: Pais[] = []; 
  public pais: any = {};
  public urlServicio: string = "https://restcountries.com/v3";
  constructor(private http: HttpClient) { }
  get Params(){
    return new HttpParams().set('fields','name,area,flags,capital');
  }

  getPaisesByPaisName(pais: string): Observable<Pais[]>{
    const url: string = `${this.urlServicio}/name/${pais}`;
    return this.http.get<Pais[]>(`${url}`,{params: this.Params})
    .pipe(map((paises: Pais[])=> this.paises = paises));
  };

  getPaisesByCapital(capital: string): Observable<Pais[]>{
    const url: string = `${this.urlServicio}/capital/${capital}`;
    return this.http.get<Pais[]>(`${url}`,{params: this.Params})
    .pipe(map((paises: Pais[])=> this.paises = paises));
  };

  getPaisesByRegion(region: string): Observable<Pais[]>{
    const url: string = `${this.urlServicio}/region/${region}`
    return this.http.get<Pais[]>(`${url}`,{params: this.Params})
    .pipe(map((paises: Pais[])=> this.paises = paises));
  };
  
  getPais(name: string):Observable<Pais>{
    const url: string = `${this.urlServicio}/name/${name}`;
    return this.http.get<Pais>(`${url}`)
    .pipe(map((pais:Pais) => this.pais = pais));
  };
}
