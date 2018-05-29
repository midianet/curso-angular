import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];

  pagina: number;

  inscricao : Subscription;

  constructor(
    private service : CursosService,
    private activateRoute: ActivatedRoute,
    private router : Router ) {}

  ngOnInit() {
      this.cursos = this.service.getCursos();
      this.inscricao = this.activateRoute.queryParams.subscribe( (queryParams : any) => this.pagina = queryParams['pagina']);
  }

  proximaPagina(){
    this.pagina++; 
    this.router.navigate(['/cursos'], {queryParams:{'pagina': this.pagina}}) 

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
