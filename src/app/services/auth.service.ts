import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private userId: any;

  setLoggedIn(status: boolean, userId?: any) {
    this.userId = userId;
    this.loggedIn = status;
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
}
