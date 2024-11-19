import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fix typo from styleUrl to styleUrls
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'admin@example.com' && this.password === 'admin') {
      localStorage.setItem('role', 'admin');
      localStorage.setItem('authenticated', 'true');
      this.router.navigate(['/admin-dashboard']);
    } else if (this.email === 'user@example.com' && this.password === 'user') {
      localStorage.setItem('role', 'user');
      localStorage.setItem('authenticated', 'true');
      this.router.navigate(['/user-dashboard']);
    } else {
      alert('Invalid login credentials');
    }
  }
}
