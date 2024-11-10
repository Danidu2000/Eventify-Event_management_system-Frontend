import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-update-password-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-password-form.component.html',
  styleUrl: './update-password-form.component.css'
})
export class UpdatePasswordFormComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService, private http: HttpClient, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadUserDetails();
  }

  public user: any = {
    id: '',
    email: '',
    role: '',
    password: '',
    name: '',
    contact: ''
  }

  loadUserDetails() {
    this.user.email = this.authService.getForgotUserEmail();
    this.http.get(`http://localhost:8080/user/search-by-email/${this.user.email}`)
      .subscribe({
        next: (data: any) => {
          this.user.id = data.id;
          this.user.role = data.role;
          this.user.name = data.name;
          this.user.contact = data.contact;
        },
        error: (error) => {
          console.error('An error occurred during login: ' + error.message); // Handle HTTP errors
        }
      });
  }

  UpdatePassword() {
    this.http
      .put('http://localhost:8080/user/update-user', this.user)
      .subscribe((data) => {
        this.toastService.triggerAlertSuccess('User Password Updated Successfully!');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000); 
      },
      (error) => {
        this.toastService.triggerAlertWarning('An error occurred while updating the user. Please try again.');
        console.error('Error occurred while updating user:', error);
      });
  }

}
