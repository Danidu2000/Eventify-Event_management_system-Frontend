import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private userId: any;
  private role: any;
  private forgotUserEmail: any;

  constructor(private http: HttpClient) { }

  setLoggedIn(status: boolean, userId?: any, role?: any) {
    this.userId = userId;
    this.loggedIn = status;
    this.role = role;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.setLoggedIn(false);
  }

  getUserId(): any {
    return this.userId;
  }

  getUserRole(): any {
    return this.role;
  }

  sendOtp(email: string): Observable<any> {
    return this.http.post(`http://localhost:8080/auth/forgot-password`, { email });
  }

  verifyOtp(email: string, otpCode: string): Observable<any> {
    return this.http.post(`http://localhost:8080/auth/verify-otp`, { email, otpCode });
  }

  setFogotUserEmail(email: any) {
    this.forgotUserEmail = email;
  }

  getForgotUserEmail(): any{
    return this.forgotUserEmail;
  }
}
