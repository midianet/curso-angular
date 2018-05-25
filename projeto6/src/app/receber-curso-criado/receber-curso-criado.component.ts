import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {


   curso : string; 

  constructor(private service : CursosService) { }

  ngOnInit() {
    this.service.emitirCursoCriado.subscribe(c => this.curso = c);
  }

}
