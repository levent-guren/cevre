import { Component, effect, input, Input, output } from '@angular/core';

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
  temizleEvent = output<void>();
  //constructor() {
  //effect(() => {
  //  console.log('listeye geldi:', this.personeller());
  //});
  //}
  temizle() {
    this.temizleEvent.emit();
  }
}
