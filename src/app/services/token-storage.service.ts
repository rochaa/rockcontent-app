import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    let token = localStorage.getItem(TOKEN_KEY);
    if (token != null) {
      return token;
    }

    return '';
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, user);
  }

  public getUser(): string {
    let user = localStorage.getItem(USER_KEY);
    if (user != null) {
      return user;
    }

    return '';
  }
}
