import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  public user: any = {
    email: '',
    role:"Admin",
    password: '',
    name: '',
    contact: ''
  };

  constructor(private http: HttpClient) {}

  public addUser() {
    this.http
      .post('http://localhost:8080/user/add-user', this.user)
      .subscribe((data) => {
        alert('User Added');
      });
  }
}
