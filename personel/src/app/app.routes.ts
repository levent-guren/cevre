import { Routes } from '@angular/router';
import { Personel } from './page/personel/personel';
import { LoginComponent } from './core/component/login-component/login-component';
import { loginGuard } from './core/guard/login-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'personel', component: Personel, canActivate: [loginGuard] },
    { path: 'login', component: LoginComponent },
];
