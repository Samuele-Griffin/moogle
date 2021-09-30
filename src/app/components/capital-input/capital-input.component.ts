import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Pais } from 'src/app/models/pais.model';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-capital-input',
  templateUrl: './capital-input.component.html',
  styleUrls: ['./capital-input.component.css']
})
export class CapitalInputComponent implements OnInit {

  @Output() onEnter2: EventEmitter<string> = new EventEmitter();
  @Output() onDebounceTime: EventEmitter<string> = new EventEmitter();
  @Output() onSugerencias: EventEmitter<string> = new EventEmitter();
  @Input() capitalesSugeridas: Pais[] = [];
  @Input() termino: string = "";
  @Input() mostrarSugerencias: boolean = false;
  onDebouncer: Subject<string>= new Subject();
  public ingresoTexto: string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.onDebouncer.pipe(debounceTime(300))
    .subscribe(valor => this.onDebounceTime.emit(valor));
  }

  buscarPais(){
    this.onEnter2.emit(this.ingresoTexto);
  }

  teclaPresionada(){
    this.onDebouncer.next(this.ingresoTexto);
  }

  buscarSugerencias(termino: string){
    this.mostrarSugerencias = false;
    this.onSugerencias.emit(termino);
  }

}
