import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';
const API_LOGIN = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: any = environment.baseURL;

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.baseUrl);
  }

  getAllData(): Observable<any> {
    return this.http.get(API_LOGIN);
  }

  createData(data: any): Observable<any> {
    console.log(data, 'createapi=>');
    return this.http.post(API_LOGIN, data);
  }

  // login(userName: string, password: string) {
  //   return this.http.post(API_LOGIN, { userName, password });
  // }
}
