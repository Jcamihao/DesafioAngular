import { Observable } from 'rxjs';
import { Perfil } from './perfil/perfil';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const contatosUrl = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(contatosUrl);
  }

  addUser(userObj: any) {
    return this.http.post<Perfil[]>(contatosUrl + '', userObj);
  }

  deleteUser(id: any) {
    return this.http.delete<Perfil[]>(contatosUrl + id);
  }

  editarUser(id: string){
    return this.http.get<Perfil[]>(contatosUrl + id);
  }

  updateUser(id: any, userObj: any){
    return this.http.put<Perfil[]>(contatosUrl + id, userObj);
  }
}
