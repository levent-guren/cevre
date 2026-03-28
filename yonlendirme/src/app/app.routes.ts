import { Routes } from '@angular/router';
import { MenuComponent } from './core/menu-component/menu-component';
import { KullaniciComponent } from './page/kullanici-component/kullanici-component';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'kullanici/:id', component: KullaniciComponent },
];
