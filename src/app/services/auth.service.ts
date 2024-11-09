import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private userId: any;
  private role: any;

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
}
