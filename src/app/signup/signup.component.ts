import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide = true;

  registerform: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      // email: ['', Validators.required],
      // password: ['', Validators.required],
      'email': new FormControl('', [Validators.required, Validators.email]),
      'name': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40),]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(/^[a-z0-9_\-]+$/)]),
    });
  }

}
