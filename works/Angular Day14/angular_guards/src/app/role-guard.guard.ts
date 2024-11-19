import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      alert('Access denied. Admins only.');
      this.router.navigate(['/user-dashboard']);
      return false;
    }
    return true;
  }
}
