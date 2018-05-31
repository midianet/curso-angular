import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService : AuthService,
    private router : Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) : Observable<boolean> | boolean {
      let isAuth: boolean =  this.authService.isAuth();
      if(!isAuth) this.router.navigate(['/login']);
      return isAuth;
    }; 

    canLoad(route: Route) : Observable<boolean> | Promise<boolean> {
        let isAuth: boolean =  this.authService.isAuth();
        return  of(isAuth);
    }



}