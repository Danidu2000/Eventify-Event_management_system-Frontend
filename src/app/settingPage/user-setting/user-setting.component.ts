import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-setting',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './user-setting.component.html',
  styleUrl: './user-setting.component.css'
})
export class UserSettingComponent implements OnInit {
  public userList: any[] = [];    // Explicitly define as an array
  public tempUser: any = {};      // Initialize as an empty object

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.loadUsers();
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  loadUsers() {
    this.http.get<any[]>('http://localhost:8080/user/get-all')
      .subscribe(
        (data) => {
          this.userList = data;
        },
        (error) => {
          console.error('Error loading reviews:', error);
        }
      );
  }

  deleteUserById(id: any) {
    this.http.delete(`http://localhost:8080/user/delete-by-id/${id}`)
      .subscribe((data) => {
        alert('User deleted successfully');
        this.loadUsers();
      });
  }

  updateUser(user: any) {
    this.tempUser = {...user};
  }

  saveUser() {
    this.http.put(`http://localhost:8080/user/update-user`, this.tempUser)
      .subscribe((data) => {
        alert('User updated successfully');
        this.loadUsers();
      });
  }
}
