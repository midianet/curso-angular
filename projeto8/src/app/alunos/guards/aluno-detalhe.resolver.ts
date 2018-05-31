import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Aluno } from "../Aluno";
import { AlunosService } from "../alunos.service";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno>{

    constructor(private service: AlunosService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        let id =  route.params['id'];
        console.log('Id--' + id);
        return this.service.find(id);
    }

}