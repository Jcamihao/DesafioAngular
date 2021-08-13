import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}
