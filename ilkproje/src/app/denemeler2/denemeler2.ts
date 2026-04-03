import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-denemeler2',
  imports: [CommonModule],
  templateUrl: './denemeler2.html',
  styleUrl: './denemeler2.scss',
})
export class Denemeler2 {
  isimler = ['Kamuran', 'Murteza', 'Kamile', 'Şahmerdan'];
  renk = '#f00';
  ozellikler = {
    color: this.renk,
    'font-size': '2rem'
  };
  hata = false;
  test(deger: string) {
    console.log('butona basildi:' + deger);
  }
}
