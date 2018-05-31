import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../Aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno : Aluno;
  inscricao : Subscription;

  constructor(
    private router : Router,
    private activeRoute : ActivatedRoute,
    private service: AlunosService
  ) { }

  edit(){
    this.router.navigate(['/alunos',this.aluno.id,'edit']);
  }

  ngOnInit() {
    this.inscricao = this.activeRoute.params.subscribe((params: any) => {
      this.aluno = this.service.find(params['id']);
      if(this.aluno === null) this.aluno = null;
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
