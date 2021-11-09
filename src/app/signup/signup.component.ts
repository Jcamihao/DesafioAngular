import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hide = true;

  registerform: FormGroup = new FormGroup({});  

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignUpService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      emailLogin: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern(/^[a-z0-9_\-]+$/),
      ]),
    });
  }

  signup() {
    const newUser = this.registerform.getRawValue() as NewUser;
    this.signupService.signup(newUser).subscribe(
      () => {
        this._snackBar.open('Cadastro feito com sucesso');
        this.router.navigate(['']);
      },
      (err) => {
        this._snackBar.open(
          'Cadastro não pode ser completado. Reveja seus dados'
        );
      }
    );
  }
}
