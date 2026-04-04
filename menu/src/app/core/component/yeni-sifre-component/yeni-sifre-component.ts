import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { yeniSifreValidator } from '../../validator/yeni-sifre.validator';

@Component({
  selector: 'app-yeni-sifre-component',
  imports: [CommonModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './yeni-sifre-component.html',
  styleUrl: './yeni-sifre-component.scss',
})
export class YeniSifreComponent {
  fb = inject(FormBuilder);

  form = this.fb.group({
    sifre: ['', [Validators.required]],
    yeniSifre: ''
  }, { validators: [yeniSifreValidator()] });
}
