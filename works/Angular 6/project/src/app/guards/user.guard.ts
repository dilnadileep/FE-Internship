// src/app/guards/user.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const userType = localStorage.getItem('userType');
    if (userType === 'user') {
      return true;
    } else {
      alert('Access denied. Users only!');
      return false;
    }
  }
}
