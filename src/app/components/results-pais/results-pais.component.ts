import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-results-pais',
  templateUrl: './results-pais.component.html',
  styleUrls: ['./results-pais.component.css']
})
export class ResultsPaisComponent implements OnInit {

  @Input() paises: any[] =[];
  @Input() loading: boolean = false;
  @Input() hayError: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
