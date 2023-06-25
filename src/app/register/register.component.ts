import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  type: string = 'password';
  email: string = '';
  password: string = '';
  msg: string = '';
  constructor(private router: Router) { }
  PassCheck() {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  Register() {
    if (this.email === '' || this.password === '') {
      this.msg = 'Please fill in all fields';
    }
    else {
      this.msg = '';
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    }
  };
}
