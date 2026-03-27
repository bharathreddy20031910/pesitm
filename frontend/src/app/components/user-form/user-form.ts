import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../api-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm implements OnInit {
  user: any = { name: '', age: null, email: '', password: '' };
  isEdit = false;
  userId: string | null = null;

  constructor(
    private userService: ApiServices,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.isEdit = true;
      this.userService.getUserById(this.userId).subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (err) => {
          console.error('Error fetching user:', err);
        }
      });
    }
  }

  onSubmit() {
    if (this.isEdit && this.userId) {
      this.userService.updateUser(this.userId, this.user).subscribe({
        next: () => {
          this.router.navigate(['/home/user']);
        },
        error: (err) => {
          console.error('Error updating user:', err);
        }
      });
    } else {
      this.userService.createUser(this.user).subscribe({
        next: () => {
          this.router.navigate(['/home/user']);
        },
        error: (err) => {
          console.error('Error creating user:', err);
        }
      });
    }
  }
}