// src/app/guards/admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const userType = localStorage.getItem('userType');
    if (userType === 'admin') {
      return true;
    } else {
      alert('Access denied. Admins only!');
      return false;
    }
  }
}
