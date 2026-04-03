import { Routes } from '@angular/router';
import { Denemeler } from './denemeler/denemeler';
import { Denemeler2 } from './denemeler2/denemeler2';
import { Denemeler3 } from './denemeler3/denemeler3';

export const routes: Routes = [
    { path: '', redirectTo: 'denemeler2', pathMatch: 'full' },
    { path: 'denemeler', component: Denemeler },
    { path: 'denemeler2', component: Denemeler2 },
    { path: 'denemeler3', component: Denemeler3 },
];
