import { Injectable } from '@angular/core';
import { Aluno } from './Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  private alunos : Aluno[] = [
    new Aluno(1 , 'Aluno1','aluno1@teste.com'),
    new Aluno(2 , 'Aluno2','aluno2@teste.com'),
    new Aluno(3 , 'Aluno3','aluno3@teste.com'),
  ]; 

  listAll(){
      return this.alunos;
  }

  find(id){
    return this.alunos.find(a => a.id == id);
  }

}
