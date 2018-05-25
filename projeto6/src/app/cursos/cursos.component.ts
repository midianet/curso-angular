import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers : [CursosService]
})
export class CursosComponent implements OnInit {

  private cursos: string[];  

  constructor(private service : CursosService) {
      
  }

  ngOnInit() {
    this.cursos = this.service.getCursos();
   // this.service.emitirCursoCriado.subscribe( curso => console.log(curso));
   CursosService.criouNovoCurso.subscribe(curso => this.cursos.push(curso));
  }

}