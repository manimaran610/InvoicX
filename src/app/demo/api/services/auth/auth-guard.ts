import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated().pipe(
      map((isAuthenticated: boolean) => {
        console.warn(isAuthenticated)
        if (isAuthenticated) {
          return true; // If user is authenticated, allow access to the route
        } else {
          // If user is not authenticated, redirect to the login page
          return this.router.createUrlTree(['Landing']);
        }
      })
    );
  }
}
