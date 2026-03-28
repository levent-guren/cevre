import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../shared/service/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginService = inject(LoginService);
  router = inject(Router);

  renk = signal("mavi");
  hata = false;
  ozellikler = {
    'kirmizi': !this.hata,
    'mavi': this.hata,
  };
  sifre = '';
  email = '';

  butonaBasildi() {
    this.renk.set("kirmizi");
    this.hata = !this.hata;
    //this.ozellikler.kirmizi = !this.hata;
  }
  login() {
    this.loginService.login(this.email, this.sifre).subscribe({
      next: (sonuc) => {
        console.log(sonuc);
        this.router.navigate(['/kullanici']);
      },
      error: () => {
        console.log('hata oluştu');
      }
    });
  }
}
