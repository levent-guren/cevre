import { CommonModule, } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordValidator } from '../../shared/validator/password.validator';

@Component({
  selector: 'app-login2-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login2-component.html',
  styleUrl: './login2-component.scss',
})
export class Login2Component {
  fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.minLength(3), Validators.required]],
    pass: ['', [passwordValidator(8)]]
  });
  login() {
    console.log(this.form.value);
  }
}
