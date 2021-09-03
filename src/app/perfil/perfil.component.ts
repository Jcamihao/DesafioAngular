
import { HttpClient } from '@angular/common/http';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { InfosService } from './../infos.service';
import { Component, OnInit } from '@angular/core';
import { Perfil } from './perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {

  infos: Array<Perfil> = [];

  constructor(private infosService: InfosService,
     route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.perfilSelecionado();
    this.conteudoPerfil();
  }

  conteudoPerfil(){
    this.infosService.listarInfoParametros().subscribe(data => {this.infos = data});
  }

  // perfilSelecionado(perfilId: string):void{
  //   this.infosService.getComponentPerfil(perfilId).subscribe(data => {this.infos = data});
  // }
}

