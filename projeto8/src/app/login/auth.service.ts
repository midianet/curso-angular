import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: Usuario = null;

  authEmitter = new EventEmitter<boolean>();

  constructor(private router : Router) { }

  login(usuario : Usuario){
    if(usuario.nome === 'usuario' && usuario.senha === '123'){
      this.usuario = usuario;
      this.authEmitter.emit(true);
      this.router.navigate(['/home']);
    }else{
      this.usuario = null;
      this.authEmitter.emit(false);
    }
  }

  public isAuth(){
    return this.usuario != null;
  }

  public auth(){
    return this.usuario;
  }

}
