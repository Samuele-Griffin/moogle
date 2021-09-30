import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaisesService } from '../services/paises.service';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-search-by-region',
  templateUrl: './search-by-region.component.html',
  styleUrls: ['./search-by-region.component.css']
})
export class SearchByRegionComponent implements OnInit {

  @ViewChild('regionSearch') regionSearch!:ElementRef<HTMLInputElement>
  public paises: Pais[] = [];
  public hayError: Boolean = false;
  public loading: boolean = false;
  public region: string = "";
  public regionActiva: string = "";
  public regions: string[] = ["europe","asia","america","africa","oceania"];
  constructor(private PaisesService: PaisesService) { }

  ngOnInit(): void {
  }

  getPaises(term: string) {
    this.loading = true;
    this.hayError = false;
    this.PaisesService.getPaisesByRegion(term).subscribe(
      (paises: Pais[]) => {
        this.paises = paises;
        this.hayError = false;
        this.loading = false;
    },(err)=>{
      if(err.status===404){
        this.hayError = true;
        this.paises = [];
      };
      this.loading = false;
    },
    );
  }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva ? 'btn-success' : 'btn-primary');
  }

  getCSSClass(region?: string): string{
    return region !=this.regionActiva ? 'btn-primary': 'btn-success';
  }

  getRegion(term: string){
    if(term === this.regionActiva){
      return;
    }
    this.loading = true;
    this.hayError = false;
    this.regionActiva = term;
    this.paises = [];
    this.PaisesService.getPaisesByRegion(term).subscribe(
      (paises: Pais[]) => {
        this.paises = paises;
        this.hayError = false;
        this.loading = false;
    },(err)=>{
      if(err.status===404){
        this.hayError = true;
        this.paises = [];
      };
      this.loading = false;
    },
    );
  }

  getRegionDebounce(term: any){
    this.hayError = false;
    console.log(term);
  }
}
