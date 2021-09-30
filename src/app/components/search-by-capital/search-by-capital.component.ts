import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaisesService } from '../services/paises.service';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-search-by-capital',
  templateUrl: './search-by-capital.component.html',
  styleUrls: ['./search-by-capital.component.css']
})
export class SearchByCapitalComponent implements OnInit {
  @ViewChild('capitalSearch') capitalSearch!: ElementRef<HTMLInputElement>;
  public paises:Pais[] = [];
  public capitalesSugeridas : Pais[] = [];
  public hayError: Boolean = false;
  public loading: Boolean = false;
  public termino: string = "";
  public mostrarSugerencias: boolean = false;
  constructor(private PaisesService: PaisesService) { }

  ngOnInit(): void {
  }

  buscarPais(term: any){
    this.loading = true;
    this.hayError = false;
    this.PaisesService.getPaisesByCapital(term).subscribe(
      (paises: Pais[]) => {
        (this.paises = paises, this.loading = false),
        this.hayError = false;
        this.loading = false;
      },
        (err) => {
          if (err.status === 404) {
            this.hayError = true;
            this.paises = [];
          }
          this.loading = false;
        }
      );
  }

  buscarPais2(term: any){
    this.hayError = false;
    this.loading = false;
    this.termino = term;
    this.mostrarSugerencias = true;
    this.PaisesService.getPaisesByCapital(term).subscribe((pais: Pais[]) => {
      this.capitalesSugeridas = pais.splice(0,5)},
      (err)=> {
        if(err.status===404){
          this.capitalesSugeridas=[];
          this.mostrarSugerencias = false;
        }
      }
      );
  }

  getSugerencia(termino: string){
    return this.buscarPais(termino);
  }

  


}
