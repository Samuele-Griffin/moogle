import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
  @Output() onSugerencia: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 
  @Input() paisesSugeridos: Pais[] =[];
  @Input() termino: string ="";
  debuncer: Subject<string>= new Subject();
  public paisInput: string = "";
  @Input() mostrarSugerencias: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.debuncer.pipe(debounceTime(300))
    .subscribe(resp => this.onDebounce.emit(resp));
  }

  buscarElemento(){
    this.onEnter.emit(this.paisInput);
  }

  teclaPresionada(){
    this.debuncer.next(this.paisInput);
  }

  buscarSugerencias(termino: string){
    this.mostrarSugerencias = false;
    this.onSugerencia.emit(termino);
  }
  
}
