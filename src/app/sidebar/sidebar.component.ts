import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContatoService } from '../contato.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  contatos: Array<any> = [];

  constructor(private contatoService: ContatoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.contatoService.listar().subscribe(dados => this.contatos = dados);
  }

  onClick(contatoId: number) {
    this.router.navigate([contatoId]);
  }


}
