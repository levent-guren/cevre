import { Component, inject, signal } from '@angular/core';
import { PersonelArama } from "../../shared/component/personel-arama/personel-arama";
import { PersonelListe } from "../../shared/component/personel-liste/personel-liste";
import { PersonelService } from '../../shared/service/personel-service';
import { PersonelModel } from '../../shared/model/personel';

@Component({
  selector: 'app-personel',
  imports: [PersonelArama, PersonelListe],
  templateUrl: './personel.html',
  styleUrl: './personel.scss',
})
export class Personel {
  personelListesi = signal<PersonelModel[]>([]);
  personelService = inject(PersonelService);

  aramaYap(value: any) {
    console.log('arama yapıldı', value);

    this.personelService.getPersoneller(value).subscribe({
      next: (sonuc) => {
        this.personelListesi.set(sonuc);
      }
    });
  }
}
