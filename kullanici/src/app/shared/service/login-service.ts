import { Injectable } from '@angular/core';
import { delay, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login(email: string, pass: string) {
    return new Observable((sub) => {
      setTimeout(() => {
        if (pass == '1234') {
          sub.next('ok');
        } else {
          sub.error();
        }
        sub.complete();
      }, 1000);
    });
  }
}
