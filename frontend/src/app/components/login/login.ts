import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Simple hard-coded demo credentials for students
    if (this.username.trim() === 'student' && this.password === 'class123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home/user']);
    } else {
      alert('Invalid credentials. Use student / class123');
    }
  }
}