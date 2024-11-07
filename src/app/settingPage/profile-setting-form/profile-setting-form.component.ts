import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-setting-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile-setting-form.component.html',
  styleUrl: './profile-setting-form.component.css'
})
export class ProfileSettingFormComponent implements OnInit{
  constructor(private router: Router, private authService: AuthService, private http: HttpClient) { }
  ngOnInit(): void {
    this.loadUserDetails();
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  public user: any = {
    id: '',
    email: '',
    role: 'User',
    password: '',
    name: '',
    contact: ''
  };

  loadUserDetails() {
    let id = this.authService.getUserId();
    fetch(`http://localhost:8080/user/search-by-id/${id}`)
      .then(res => res.json())
      .then(data => {
        this.user.id = data.id;
        this.user.email = data.email;
        this.user.role = data.role;
        this.user.password = data.password;
        this.user.name = data.name;
        this.user.contact = data.contact;
      })
      .catch(error => console.error('Error loading user details:', error));
  }

  public updateUser() {
    this.http
      .put('http://localhost:8080/user/update-user', this.user)
      .subscribe((data) => {
        alert('User Updated');
      });
  }
}
