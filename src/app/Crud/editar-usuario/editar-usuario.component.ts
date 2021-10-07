import { MatSnackBar } from '@angular/material/snack-bar';
import { ContatoService } from '../../contato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  photo!: File;
  userId: any;
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
   url = "//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png";

  constructor(private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: Router) { }

  ngOnInit(): void {

    this.dataLoaded = false;

    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });

    if (this.userId !== '') {
      this.contatoService.editarUser(this.userId)
        .toPromise()
        .then(data => {
          this.userDetails = data;
          Object.assign(this.userDetails, data);
          this.editUserForm = this.formBuilder.group({
            'name': new FormControl(this.userDetails.name),
            'email': new FormControl(this.userDetails.email),
            'phone': new FormControl(this.userDetails.phone),
            'birthday': new FormControl(this.userDetails.birthday),
            'about': new FormControl(this.userDetails.about),
            'photo': new FormControl(this.userDetails.photo),
          })
          this.dataLoaded = true;
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  updateUser() {
    this.contatoService.updateUser(this.userId, this.editUserForm.value).subscribe(data => {
      this._snackBar.open("Contato atualizado com sucesso");
      this.route.navigate(['']);
    }, err => {
      this._snackBar.open("Não foi possivel atualizar o contato");
      // this.route.navigate(['']);
    });
  }

  onFileChange(event: any) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [photo] = event.target.files;
      reader.readAsDataURL(photo);

      reader.onload = () => {
        this.editUserForm.patchValue({
          photo: reader.result
        });
      };
    }
  }

  onselecrFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url=event.target.result;
      }
    }
  }
}
