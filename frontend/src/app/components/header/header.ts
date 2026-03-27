import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../http-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  users: any[] = [];

  constructor(private userdata: HttpService, private router: Router) {}

  ngOnInit() {
    this.userdata.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  @Output() myData = new EventEmitter<any>();

  sendData() {
    console.log('Hello');
    this.myData.emit('Hello');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
