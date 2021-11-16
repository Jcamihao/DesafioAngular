import { ApiService } from './../API/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface LoginForm {
  emailLogin: string;
  userName: string;
  password: string;
}
const API = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseUrl: any = environment.baseURL;

  constructor(private http: HttpClient, private apiService: ApiService) {}
}
