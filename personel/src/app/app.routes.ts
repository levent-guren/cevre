import { Routes } from '@angular/router';
import { Personel } from './page/personel/personel';

export const routes: Routes = [
    { path: '', redirectTo: 'personel', pathMatch: 'full' },
    { path: 'personel', component: Personel },
];
