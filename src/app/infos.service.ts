import { Perfil } from './perfil/perfil';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = "https://60c8b73dafc88600179f7da1.mockapi.io/contacts/";


@Injectable({
  providedIn: 'root'
})
export class InfosService {

  constructor(private http: HttpClient) { }

  getPerfil(): Observable<any> {
    return this.http.get(apiURL);
  }

  getComponentPerfil(perfilId: string): Observable<any>{
    let params = new HttpParams().set("id", perfilId);
    return this.http.get<Perfil[]>(apiURL, {params: params});
  }

  listarInfoParametros(): Observable<any> {
    const idurl = `${apiURL}`;
    return this.http.get<Perfil[]>(idurl);
  }
}
