import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<any> {
  resolve() {
    return of({ message: 'Welcome to the dashboard!' });
  }
}
