import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-region',
  templateUrl: './results-region.component.html',
  styleUrls: ['./results-region.component.css']
})
export class ResultsRegionComponent implements OnInit {

  @Input() paises: any [] =[];
  @Input() loading: Boolean = false;
  @Input() hayError: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
