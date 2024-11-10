import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { ToastAlertComponentComponent } from "../../alert/toast-alert-component/toast-alert-component.component";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastAlertComponentComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string = '';
  otp: string = '';
  otpSent: boolean = false;

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) { }

  requestOtp() {
    console.log(this.email);
    this.authService.sendOtp(this.email).subscribe(() => {
      this.otpSent = true;
      this.toastService.triggerAlertMessage('OTP sent to your email.');
    });
  }

  verifyOtp() {
    this.authService.verifyOtp(this.email, this.otp).subscribe((response) => {
      if (response) {
        this.toastService.triggerAlertSuccess('OTP verified.');
        this.router.navigate(['/update-password']);
        this.authService.setFogotUserEmail(this.email);
      } else {
        this.toastService.triggerAlertWarning('Invalid OTP. Please try again.');
      }
    });
  }
}
