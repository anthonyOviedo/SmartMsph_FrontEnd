// Angular
import { Routes, RouterModule } from "@angular/router";

// Components
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';

// Guards
import { LoginGuard } from './services/service.index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NoPageFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });