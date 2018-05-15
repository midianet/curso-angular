import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valor : number =  5;

  deletarCiclo : boolean = false;

  mudaValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }

}