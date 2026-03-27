import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../api-services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  users: any[] = [];

  constructor(private userService: ApiServices) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.loadUsers(); // Reload users after delete
      },
      error: (err: any) => {
        console.error('Error deleting user:', err);
      }
    });
  }
}
