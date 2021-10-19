import { ApiService } from './../API/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';


export interface LoginForm {
  emailLogin: string;
  userName: string;
  password: string;
}
const API = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';

@Injectable({ providedIn: 'root' })

export class AuthService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  login(loginForm: LoginForm) {
    return this.http.post<any>(API, { email: loginForm.emailLogin, password: loginForm.password, userName: loginForm.userName }).pipe(
      map((token) => {
        console.log('token');
        localStorage.setItem('blog-token', token.access_token);
        return token;
      })
    )
  }

}
