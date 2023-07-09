import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate  {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') ) {
        if ((state.url == '/ticket') && localStorage.getItem('role') =='Admin') {
          return true;
        } 
        else if ((state.url == '/ticket/add') && localStorage.getItem('role') == 'User') {
          return true
        } 
        else
        {
          return false
        }
     
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
