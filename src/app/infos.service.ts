import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  
  constructor(private http: HttpClient) { }


  listarInfoParametros(): Observable<any>{
    let params = new HttpParams();
    params = params.set('id', 15);
    return this.http.get("https://60c8b73dafc88600179f7da1.mockapi.io/contacts/", {params: params})
  }
}
