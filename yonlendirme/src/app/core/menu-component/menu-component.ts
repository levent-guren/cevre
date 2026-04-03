import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  imports: [],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent {
  router = inject(Router);

  menuyeGit() {
    this.router.navigate(['/kullanici', 1]);
  }
}
