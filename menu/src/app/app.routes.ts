import { Routes } from '@angular/router';
import { LoginComponent } from './core/component/login-component/login-component';
import { MenuComponent } from './core/component/menu-component/menu-component';
import { PersonelListe } from './page/personel-liste/personel-liste';
import { DemirbasArama } from './page/demirbas-arama/demirbas-arama';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'menu', component: MenuComponent, children: [
            { path: '', redirectTo: 'personel', pathMatch: 'full' },
            { path: 'personel', component: PersonelListe },
            {
                path: 'demirbas', loadComponent:
                    () => import('./page/demirbas-arama/demirbas-arama')
                        .then(d => d.DemirbasArama)
            },
            {
                path: 'yeniSifre', loadComponent:
                    () => import('./core/component/yeni-sifre-component/yeni-sifre-component')
                        .then(s => s.YeniSifreComponent)
            },
        ]
    }
];