import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-search-by-pais',
  templateUrl: './search-by-pais.component.html',
  styleUrls: ['./search-by-pais.component.css'],
})
export class SearchByPaisComponent implements OnInit {
  @ViewChild('paisSearch') PaisSearch!: ElementRef<HTMLInputElement>;
  public termino: string = "";
  public paises: Pais[] = [];
  public paisesSugeridos: Pais[] = [];
  public loading: boolean = false;
  public hayError: boolean = false;
  public mostrarSugerencias: boolean = false;

  constructor(private PaisesService: PaisesService) {}

  ngOnInit(): void {}

  getPaises(term:string) {
    this.loading = true;
    this.hayError = false;
    this.PaisesService.getPaisesByPaisName(term).subscribe(
      (paises: Pais[]) => {
        this.hayError= false;
        this.paises = paises;
        this.loading = false;
      },(err)=>{
        if(err.status===404){
          this.hayError= true;
          this.loading = false;
          this.paises = [];
        }
      },
    );
  }

  buscarSugerencias(term: any){
    this.hayError = false;
    this.loading = false;
    this.termino = term;
    this.mostrarSugerencias = true;
    return this.PaisesService.getPaisesByPaisName(term).subscribe((pais: Pais[]) => this.paisesSugeridos = pais.splice(0,4),
    (err) =>{
      this.paisesSugeridos = [];
      this.mostrarSugerencias= false;
    });
  }

  getSugerencia(termino: string){
    return this.getPaises(termino);
  }
}
