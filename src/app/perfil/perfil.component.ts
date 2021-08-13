import { HttpClient } from '@angular/common/http';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { InfosService } from './../infos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from './perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {

  infos: Array<any> = [];

  constructor(private infosService: InfosService,
     route: ActivatedRoute) {
}

  ngOnInit(): void {
    this.infosService.listarInfoParametros().subscribe(data => {this.infos = data})
  }


}

