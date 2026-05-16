import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: "upload",
        loadComponent: () => import('./upload/upload').then(m => m.Upload)
    },
    {
        path: "history",
        loadComponent: () => import('./history/history').then(m => m.History)
    },
    {
        path: "**",
        redirectTo: ""
    }
];
