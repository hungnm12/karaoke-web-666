import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface RegisterRequest {
  username: string;
  password: string;
}

interface AuthenticationRequest {
  username: string;
  password: string;
}

interface AuthenticationResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8002/api/v1/auth';
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return this.token;
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }

  register(username: string, password: string): Observable<AuthenticationResponse> {
    const request: RegisterRequest = { username, password };
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/register`, request);
  }

  login(username: string, password: string): Observable<AuthenticationResponse> {
    const request: AuthenticationRequest = { username, password };
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/authenticate`, request)
      .pipe(
        tap(response => {
          this.token = response.token;
        })
      );
  }

  logout(): void {
    this.token = null;
  }
}