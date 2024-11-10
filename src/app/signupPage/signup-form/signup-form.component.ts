import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastAlertComponentComponent } from "../../alert/toast-alert-component/toast-alert-component.component";
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastAlertComponentComponent],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  public user: any = {
    email: '',
    role:"User",
    password: '',
    name: '',
    contact: ''
  };

  constructor(private http: HttpClient,private toastService: ToastService, private router: Router) {}

  public addUser() {
    this.http
      .post('http://localhost:8080/user/add-user', this.user)
      .subscribe((data) => {
        this.toastService.triggerAlertSuccess('You are signed up successfully!');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      (error) => {
        console.error('Error occurred while signing up:', error);
        this.toastService.triggerAlertWarning('An error occurred. Please try again.');
      });
  }
}
