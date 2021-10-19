
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(userName: string, password: string) {
    return this.http.post(API, { userName, password });
  }

}
