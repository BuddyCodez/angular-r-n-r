import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  type: string = 'password';
  email: string = '';
  password: string = '';
  msg: string = '';
  PassCheck() {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  Login() {
    if (this.email === '' || this.password === '') {
      this.msg = 'Please fill in all fields';
    }
    else {
      if (this.email != localStorage.getItem('email')) {
        this.msg = 'Email does not exist';
      } else if (this.password != localStorage.getItem('password')) {
        this.msg = 'Wrong password';
      } else {
        this.msg = '';
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/home']);
      }
    }
  };
}
