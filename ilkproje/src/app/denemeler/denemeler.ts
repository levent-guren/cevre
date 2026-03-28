import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-denemeler',
  imports: [FormsModule],
  template: `
  Merhaba {{ isim }},<br/>
  Sana da merhaba {{ test() }}<br/>
  {{ adres }} {{ 2 + 2 }}
  <button (click)='butonaBasildi()'>Test</button><br/>
  <input value='{{adres}}' /><br/>
  <input [disabled]="!aktif" /><br/>
  <input [(ngModel)]="deger"/><br/>
  {{deger}}
  `,
  styleUrl: './denemeler.scss',
})
export class Denemeler {
  isim: string = 'Levent';
  adres = window.location.href;
  deger = 'ilkdeger';
  aktif = true;
  butonaBasildi() {
    this.isim = 'Murteza';
    this.aktif = !this.aktif;
    this.deger = '';
  }
  test(): string {
    return "Ayşe";
  }
}
