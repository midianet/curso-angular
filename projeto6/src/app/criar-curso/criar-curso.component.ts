import { Component, OnInit } from '@angular/core';
import { CursosService} from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers : [CursosService]
})
export class CriarCursoComponent implements OnInit {

  private cursos: string[];

  constructor(private service: CursosService) { }

  addCurso(curso: string){
    this.service.addCurso(curso);
  }

  ngOnInit() {
    this.cursos = this.service.getCursos();
  }

}
