import { Component, effect, input, Input } from '@angular/core';

@Component({
  selector: 'app-personel-liste',
  imports: [],
  templateUrl: './personel-liste.html',
  styleUrl: './personel-liste.scss',
})
export class PersonelListe {
  //@Input()
  //personeller = [];
  personeller = input<any>(null);
  //constructor() {
  //effect(() => {
  //  console.log('listeye geldi:', this.personeller());
  //});
  //}
}
