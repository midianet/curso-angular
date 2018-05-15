import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  url          : string = 'http://latinowarego.org';
  urlImagem    : string = 'http://www.smashbros.com/wiiu-3ds/images/character/toon_link/main.png'
  cursoAngular : boolean = true

  valorAtual  : string = '';
  valorSalvo  : string = '';
  nomeCurso   : string = 'Angular';
  isMouseOver : boolean = false;

  valorInicial = 15;

  getValor(){
    return 20;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botao Clicado');
  }

  salvandoValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
      this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(event : KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }
  
  onMudouValor(event){
      console.log(event);

  }

  constructor() { }

  ngOnInit() {
  }
  
}