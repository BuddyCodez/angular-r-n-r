import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  category = [
    "Sydens",
    "SUV",
    "MiniVans",
    "Hatchbacks",
  ];
  isLoggedIn: boolean = false; // Initialize with false
  email: string | null = null;
  constructor() {
    this.email = localStorage.getItem('email');
    this.isLoggedIn = localStorage.getItem('isLoggedIn') ? true : false;
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
