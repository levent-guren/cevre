import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UzunlukPipe } from '../pipe/uzunluk-pipe';
class Bilgisayar {
  constructor(
    public model: string,
    public ram: number
  ) { }
}
@Component({
  selector: 'app-denemeler3',
  imports: [CommonModule, UzunlukPipe],
  templateUrl: './denemeler3.html',
  styleUrl: './denemeler3.scss',
})
export class Denemeler3 {
  tarih = new Date();
  bilgisayar = new Bilgisayar('Monster Tulpar', 32);
}
