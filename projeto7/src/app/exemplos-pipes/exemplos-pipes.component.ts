import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  book : any = {
     title : 'Organizações tabajara',
     rating : 4.532,
     pages  : 435,
     ammount : 8.25,
     launch: new Date(2017,11,10),
     url: 'http://localhost:4200'
  }


  filtro : string;

  livros: string[] = ['Angular','Java'];

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(()  => resolve('Valor Assíncrono'), 2000)
  } )

    
  constructor() { }

  obterCursos(){
      if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '' ){
        return this.livros;
      }
      return this.livros.filter((v) => {
        if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) != -1 ){
          return true
        }
        return false;
      });
  }

  addLivro(livro){
    this.livros.push(livro);
    console.log('atualizou lista')
  }

  ngOnInit() {
  }

}
