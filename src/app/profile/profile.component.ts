import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  datePipe: DatePipe = new DatePipe('en-US');
  rentcars:any = [];
  ngOnInit(): void {
    var isLogged = localStorage.getItem('isLoggedIn');
    if(!isLogged){
      window.location.href = "/login";
    }
    var data = localStorage.getItem('cart');
    if (data) {
      this.rentcars = JSON.parse(data);
    }
  }
}
