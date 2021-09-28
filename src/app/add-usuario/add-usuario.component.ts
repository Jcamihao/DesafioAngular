import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from './../contato.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


const contatosUrl = 'https://60c8b73dafc88600179f7da1.mockapi.io/contacts/';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})

export class AddUsuarioComponent implements OnInit {

  photo!: File;
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  addUserForm: FormGroup = new FormGroup({});
  cd: any;
  url = "//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png";

  constructor(private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private _snackBar: MatSnackBar,
    private route: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    this.addUserForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'birthday': new FormControl(''),
      'about': new FormControl(''),
      photo: [null, Validators.required],
    })
  }

  createUser() {
    this.contatoService.addUser(this.addUserForm.value).subscribe(data => {
      this._snackBar.open("Contato criado com sucesso");
      this.route.navigate(['']);
    }, err => {
      this._snackBar.open("Por favor, coloque um arquivo de foto mais leve.");
    });
  }

  onFileChange(event: any) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [photo] = event.target.files;
      reader.readAsDataURL(photo);

      reader.onload = () => {
        this.addUserForm.patchValue({
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
        this.url = event.target.result;
      }
    }
  }
}
