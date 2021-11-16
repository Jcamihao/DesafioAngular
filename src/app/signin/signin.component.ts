import { ApiService } from './../API/api.service';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  hide = true;
  users: any = [];

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    localStorage.clear();
    this.apiService.getUser().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }

  login(data: any) {
    // console.log(data);

    if (data.email) {
      this.users.forEach((item: any) => {
        if (item.email === data.email && item.password === data.password) {
          localStorage.setItem('isLoggedIn', 'true');
          this._snackBar.open('Login feito com sucesso');
          this.router.navigate(['home']);
        } else {
          console.log(data);
          this._snackBar.open('Falha no login. Por favor, cheque as credenciais');
          localStorage.clear();
        }
      });
    }
  }
}
