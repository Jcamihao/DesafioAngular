import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.scss']
})
export class DeleteUsuarioComponent implements OnInit {

  userId: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private _snackBar: MatSnackBar,
    private route: Router,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id
    });

    if (this.userId) {
      this.contatoService.deleteUser(this.userId).subscribe(data => {
        this._snackBar.open("Contato deletado");
        this.route.navigate(['']);
      }, err => {
        this._snackBar.open("Não foi póssivel deletar o contato");
        this.route.navigate(['']);
      })
    }
  }

}
