// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Lazy Loading with Route Guards</h1>
      <nav>
        <a routerLink="/home">Home</a> |
        <a routerLink="/admin">Admin</a> |
        <a routerLink="/user">User</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Set the user type for testing purposes
    // Uncomment the line for testing as 'admin' or 'user'
    localStorage.setItem('userType', 'user'); // or 'user'
  }
}
