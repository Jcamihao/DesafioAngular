import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContatoService } from '../contato.service';
import { MatTableDataSource } from '@angular/material/table';

const contatosUrl = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';

export interface Perfil {
  id: number;
  photo: string;
  name: string;
  phone: number;
  email: string;
  birthday: number;
  about: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  contatos: Perfil[] = [];
  // filterTerm: string = '';
  filter: string = '';
  dataSource = new MatTableDataSource();
  private _url = '';

  @Input() set url(url: string){
    if(!url.startsWith('data')){
      this._url = contatosUrl + url;
    } else this._url = url
  }

  constructor(private contatoService: ContatoService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }

  onClick(contatoId: number) {
    this.router.navigate(['usuario', contatoId]);
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }
}

