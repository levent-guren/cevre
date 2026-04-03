import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KullaniciService } from '../../shared/service/kullanici-service';
import { User } from '../../shared/model/user';

@Component({
  selector: 'app-kullanici-component',
  imports: [],
  templateUrl: './kullanici-component.html',
  styleUrl: './kullanici-component.scss',
})
export class KullaniciComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  kullaniciService = inject(KullaniciService);

  id: number = 0;
  user = signal<User | null>(null);
  constructor() {
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe({
      next: (val) => {
        this.id = val.get('id') ? Number(val.get('id')) : 0;
        this.kullaniciyiOku();
      }
    });
  }
  kullaniciyiOku() {
    this.kullaniciService.getUsers(this.id).subscribe({
      next: (newUser: User) => {
        this.user.set(newUser);
      },
      error: (hata: any) => {
        console.error(hata);
        this.user.set(null);
      }
    });
  }

  onceki() {
    const i = Number(this.id);
    if (i > 1) {
      this.router.navigate(['/kullanici', i - 1]);
    }
  }
  sonraki() {
    const i = Number(this.id);
    if (i < 10) {
      this.router.navigate(['/kullanici', i + 1]);
    }
  }
}
