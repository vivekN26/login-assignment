import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginResponse } from '../shared/models/auth.model';
import { API_ENDPOINTS } from '../shared/constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly LOGIN_URL = API_ENDPOINTS.LOGIN;
  private readonly USER_EMAIL = 'user_email';
  private readonly ACCESS_TOKEN = 'access_token';
  userEmail = signal<string | null>(null);

  constructor(
    private readonly http: HttpClient, 
    private readonly cookieService: CookieService,
    private readonly router: Router
  ) { }

  login(user: {email: string, password: string}): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.LOGIN_URL, user).pipe(
      tap(response => {
        this.cookieService.set(this.ACCESS_TOKEN, response.token, 1);
        this.cookieService.set(this.USER_EMAIL, response.user.email);
      })
    )
  }

  logout() {
    this.cookieService.delete(this.ACCESS_TOKEN);
    this.cookieService.delete(this.USER_EMAIL);
    this.router.navigate(['/login']);
  }

  isUserAuthenticated(): boolean {
    return this.cookieService.check(this.ACCESS_TOKEN);
  }

  getAccessToken(): string {
    return this.cookieService.get(this.ACCESS_TOKEN);
  }

  getUserEmail(): string | null {
    return this.userEmail();
  }

  initUserSession() {
    // on refresh of page, access the user email from cookie
    const email = this.getUserEmail();
    if(email) {
      this.userEmail.set(email);
    }
  }

}
