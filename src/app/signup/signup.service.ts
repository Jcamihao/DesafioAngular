import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';
const localHost = 'http://localhost3000/user';

@Injectable({ providedIn: 'root' })
export class SignUpService {
  constructor(private http: HttpClient) {}

  signup(newUser: NewUser) {
    return this.http.post<any>(localHost + '', newUser);
  }
}
