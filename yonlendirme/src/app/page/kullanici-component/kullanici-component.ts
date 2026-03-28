import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kullanici-component',
  imports: [],
  templateUrl: './kullanici-component.html',
  styleUrl: './kullanici-component.scss',
})
export class KullaniciComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  id: string | null = null;
  constructor() {
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe({
      next: (val) => {
        this.id = val.get('id');
        console.log(this.id);
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
