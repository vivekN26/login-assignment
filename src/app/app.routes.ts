import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },{
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [authGuard]
    },{
        path: 'list',
        loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule),
        // canActivate: [authGuard]
    },{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full', 
    }, {
        path: '**', 
        redirectTo: 'login'
    }

];
