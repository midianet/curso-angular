import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription
  curso: any;

  constructor(private router: Router, private activeRoute : ActivatedRoute, private service : CursosService) {
     //this.id = this.route.snapshot.params['id'];
     //console.log(this.route);
   }  

  ngOnInit() {
     this.inscricao = this.activeRoute.params.subscribe((params: any) => {
        this.id = params['id'];
        this.curso = this.service.getCurso(this.id);
        if(this.curso == null){
            this.router.navigate(['cursos','naoencontrado']);
        } 
      });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
