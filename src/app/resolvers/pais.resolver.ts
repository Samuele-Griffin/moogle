import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PaisesService } from '../components/services/paises.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisResolver implements Resolve<any> {

  constructor(private api: PaisesService, private activatedRouted: ActivatedRoute) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.api.getPais(route.paramMap.get('name') as string);
  }
}
