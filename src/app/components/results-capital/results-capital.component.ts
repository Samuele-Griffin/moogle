import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-results-capital',
  templateUrl: './results-capital.component.html',
  styleUrls: ['./results-capital.component.css']
})
export class ResultsCapitalComponent implements OnInit {

  
  @Input() paises: any[] = [];
  @Input() loading: Boolean = false;
  @Input() hayError: Boolean = false;
  constructor(private PaisesService: PaisesService) { }

  ngOnInit(): void {
  }

  

}
