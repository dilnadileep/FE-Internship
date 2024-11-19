import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoadGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route): boolean {
    const role = localStorage.getItem('role');
    if (route.path === 'admin-dashboard' && role !== 'admin') {
      this.router.navigate(['/user-dashboard']);
      return false;
    }
    return true;
  }
}
