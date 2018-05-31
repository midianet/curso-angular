import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of} from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate>{


  canDeactivate(
    component: IFormCanDeactivate,  
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<boolean> | boolean {
      return component.canDeactivate();
    };

}