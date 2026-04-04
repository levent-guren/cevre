import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  token = '';
  http = inject(HttpClient);

  login(email: string, password: string) {
    return this.http.get(`/login?username=${email}&password=${password}`).pipe(
      tap((result) => {
        this.loggedIn = true;
      }),
      map((result: any) => {
        this.token = result.token;
        return {};
      })
    );
  }
}
