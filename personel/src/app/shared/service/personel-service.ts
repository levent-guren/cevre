import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PersonelModel } from '../model/personel';

@Injectable({
  providedIn: 'root',
})
export class PersonelService {
  http = inject(HttpClient);

  getPersoneller(kriter: any) {
    return this.http.post<PersonelModel[]>('http://localhost:8080/query', kriter);
  }
}

