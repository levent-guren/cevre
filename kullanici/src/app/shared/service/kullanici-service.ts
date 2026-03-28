import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Kullanici } from '../model/kullanici';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KullaniciService {
  private http = inject(HttpClient);

  getKullanicilar(): Observable<Kullanici[]> {
    return this.http.get<Kullanici[]>('https://jsonplaceholder.typicode.com/users');
  }
}
