import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';
import { Aluno } from '../Aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  aluno : Aluno;
  inscricao: Subscription;
  change : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.aluno = this.service.find(params['id']);
      if(this.aluno === null) this.aluno = null;;
    });
    // this.route.data.subscribe(data => this.aluno = data.aluno);
  }
  canChange(){
    if(this.change){
      confirm('Deseja realmente sair?');
    }
    return true;
  }

  onChange(){
    this.change = true;
  }

  ngOnDestroy(){
      this.inscricao.unsubscribe();
  }

  canDeactivate(){
    return this.canChange();
  }

}
