import { Perfil, Perfilador } from './perfil/perfil';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = "https://60c8b73dafc88600179f7da1.mockapi.io/contacts/";


@Injectable({
  providedIn: 'root'
})
export class InfosService {


  constructor(private http: HttpClient) { }

  listarInfoParametros(id: number): Observable<any> {
    const idurl = `${apiURL}${id}`;
    return this.http.get<any[]>(idurl);

  }
}
