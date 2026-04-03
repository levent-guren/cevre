import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, output, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personel-arama',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personel-arama.html',
  styleUrl: './personel-arama.scss',
})
export class PersonelArama {
  //@Output()
  //ara = new EventEmitter();
  ara = output<any>();

  private fb = inject(FormBuilder);
  aramaForm = this.fb.group({
    id: '',
    adi: '',
    soyadi: '',
  });
  aramaYap() {
    let id = this.aramaForm.get('id')?.value;
    let adi = this.aramaForm.get('adi')?.value;
    let soyadi = this.aramaForm.get('soyadi')?.value;
    id = id === '' ? null : id;
    adi = adi == '' ? null : adi;
    soyadi = soyadi == '' ? null : soyadi;

    this.ara.emit({ id, adi, soyadi });
  }
}
