import { ApiService } from './../API/api.service';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  hide = true;

  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // email: ['', Validators.required],
      // password: ['', Validators.required],
      'userName': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40),]),
      // 'emailLogin': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  login() {

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).pipe(
      map(token => this.router.navigate(['home']))
    ).subscribe();


    // const emailLogin = this.loginForm.get('emailLogin')?.value;
    // const userName = this.loginForm.get('userName')?.value;
    // const password = this.loginForm.get('password')?.value;

    // this.authService.authenticate(emailLogin, password, userName).subscribe(() => {
    //   this.router.navigateByUrl('home');
    //   this._snackBar.open("Login efetuado!");
    // }, err => {
    //   this._snackBar.open("Confira suas credenciais e tente de novo.");
    // });
  }
}
