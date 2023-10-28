import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('authToken');

    if (isAuthenticated) {
      console.log("isAuthenticated: success");
      return true;
    } else {
      console.log("isAuthenticated: failed");
      this.router.navigate(['/login']);
      return false;
    }
  }
}

