import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
 } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../services/account.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
      private _accountService: AccountService,
      private _router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if (this._accountService.isLoggedIn()) {
        return true;
      }

      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }


}
