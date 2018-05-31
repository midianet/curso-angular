import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable, of} from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild{

  constructor(
    private authService : AuthService,
    private router : Router ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<boolean> | boolean {
      //let isAuth: boolean =  this.authService.isAuth();
      //if(!isAuth) this.router.navigate(['/login']);
      console.log(route);
      console.log(state);
      // if(state.url.includes('edit')){
      //   alert('Sem Acesso');
      //   //return false; 
      //   return of(false);
      // }
      return true;//isAuth;
    }; 

}