import { Perfilador } from './perfil/perfil';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

const contatosUrl = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Perfilador[]>(contatosUrl);
  }
}
