import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/service/auth-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe({
      next: (result) => {
        console.log('logincomponent result:', result);
        this.router.navigate(['../personel', { adi: 'Levent', soyadi: 'GUREN' }],
          { relativeTo: this.route });
      },
      error: () => {
        alert('Hata oluştu');
      }
    });
  }
}
