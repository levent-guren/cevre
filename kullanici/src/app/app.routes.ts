import { Routes } from '@angular/router';
import { Kullanicilar } from './pages/kullanicilar/kullanicilar';
import { SayfaBulunamadi } from './core/sayfa-bulunamadi/sayfa-bulunamadi';
import { Login } from './core/login/login';
import { Login2Component } from './core/login2-component/login2-component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'kullanici', component: Kullanicilar },
    { path: 'login', component: Login },
    { path: 'login2', component: Login2Component },
    { path: '**', component: SayfaBulunamadi }
];
