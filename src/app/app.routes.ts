import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mfe1'
    },
    {
        path: 'mfe1',
        loadChildren: () => import('./mfe1/mfe1.module').then((m) => m.Mfe1Module),
    }
];
