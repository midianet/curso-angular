import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from  '../shared/log.service';

@Injectable()
export class CursosService{

    private cursos:  string[] = ['java','angular','bot'];    

    emitirCursoCriado     = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();


    constructor(private log: LogService){
        this.log.consoleLog('construiu o servico');
    }

    getCursos(){
        this.log.consoleLog('Obtendo lista de cursos');
        return this.cursos; 

    }

    addCurso(curso: string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
        this.log.consoleLog('adcionando o curso ' + curso );
    }

}