import { HttpClient, HttpParams } from '@angular/common/http';
import { RouterModule, ActivatedRoute, Routes, ParamMap, Router } from '@angular/router';
import { InfosService } from './../infos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from './perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {

  infos: Array<Perfil> = [];
  parentRouteId!: number;
  public id!: number;
  private sub: any;

  constructor(private infosService: InfosService, private route: ActivatedRoute, private http: HttpClient, private router: Router,) { }


  conteudoPerfil(id: any){
    this.infosService.listarInfoParametros(id).subscribe(data => {this.infos = data});
  }

  perfilSelecionado(perfilId: any) {
    this.infosService.getComponentPerfil(perfilId).subscribe(data => { this.infos = data });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.perfilSelecionado(this.id);
    });
  }


}

