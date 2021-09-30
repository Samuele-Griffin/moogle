import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PaisesService } from '../services/paises.service';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  public pais!: Pais;
  public paisDetalles: any = {};
  public loading: boolean = false;
  public hayError: boolean = false;
  constructor(private ActivatedRouted: ActivatedRoute, private PaisesService: PaisesService) {}

  ngOnInit(): void {
    this.ActivatedRouted.data.subscribe((data) => {
      this.loading = true;
      this.pais = data.pais[0];
    });

    //Antiguo Metodo Para Obtener Los datos de un observable usando activatedRouter
    /* this.ActivatedRouted.params.subscribe(({name}) => {
      this.PaisesService.getPaisesByPaisName(name).subscribe((pais:any) => console.log(pais[0]));
    }); */
  }
}
