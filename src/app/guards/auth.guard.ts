import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard {

  constructor( private authService : AuthService, private router : Router ) {}

  canActivateChild( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(this.authService.isAuthenticated()) 
    {
      return true;
    }
    else
    {
      // else navigate to login
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}