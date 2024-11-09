import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastAlertComponentComponent } from "../../alert/toast-alert-component/toast-alert-component.component";
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastAlertComponentComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private router: Router, private authService: AuthService, private http: HttpClient,private toastService: ToastService) { }

  public loginData: any = {
    email: '',
    password: ''
  };

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  onSignIn() {
    this.http.post('http://localhost:8080/user/login', this.loginData)
      .subscribe({
        next: (data: any) => {
          if (data.conformation) { // Check the 'conformation' field for login success
            this.authService.setLoggedIn(true, data.user_id, data.role);
            this.toastService.triggerAlertSuccess(data.massage); // Show the login success message
          } else {
            this.toastService.triggerAlertWarning(data.massage || 'Login failed'); // Show message if login fails
          }
        },
        error: (error) => { 
          this.toastService.triggerAlertWarning('An error occurred during login: ' + error.message); // Handle HTTP errors
        }
      });
  }
}

