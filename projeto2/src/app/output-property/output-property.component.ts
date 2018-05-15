import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor : EventEmitter<Number> = new EventEmitter();

  constructor() { }



  decrementa(){
   this.valor--;
   this.mudouValor.emit(this.valor);
  }
  incrementa(){
    this.valor++;
    this.mudouValor.emit(this.valor);
   }

  ngOnInit() {
  }

}
