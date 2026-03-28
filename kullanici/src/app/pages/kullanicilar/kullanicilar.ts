import { ChangeDetectorRef, Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { KullaniciService } from '../../shared/service/kullanici-service';
import { Kullanici } from '../../shared/model/kullanici';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-kullanicilar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './kullanicilar.html',
  styleUrl: './kullanicilar.scss',
})
export class Kullanicilar implements OnInit {
  private kullaniciService = inject(KullaniciService);
  kullaniciListesi = signal<Kullanici[]>([]);
  sayi = 0;
  sayi2 = computed(() => this.kullaniciListesi().length);
  //kullaniciListesi =    toSignal(this.kullaniciService.getKullanicilar(), { initialValue: [] });


  constructor(
    //  private kullaniciService:KullaniciService
  ) {
    effect(() => {
      console.log(this.kullaniciListesi().length);
      this.sayi = this.kullaniciListesi().length;
    });
    this.kullaniciService.getKullanicilar()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (result) => {
          this.kullaniciListesi.set(result);
        }
      });
  }

  ngOnInit(): void {


  }
}
