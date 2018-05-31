import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class CursosGuard implements CanActivateChild{

  constructor(
    private authService : AuthService,
    private router : Router ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<boolean> | boolean {
      //let isAuth: boolean =  this.authService.isAuth();
      //if(!isAuth) this.router.navigate(['/login']);
      return true;//isAuth;
    }; 


}