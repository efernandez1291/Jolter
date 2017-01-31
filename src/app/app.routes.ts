import  { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './login';
import { NoPageFoundComponent } from './no-page-found';
import { ManagerComponent } from './manager/manager.component'
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { RoleComponent } from './role/role.component'

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'no-page-found',
        component: NoPageFoundComponent
    },
    {
        path: 'manager',
        component: ManagerComponent,
        // TODO create Auth Guard (canActivate) to authenticate user and redirect to login if fail
    },
    {
        path: 'manager/role/:id',
        component: RoleComponent,
        // TODO create Auth Guard (canActivate) to authenticate user and redirect to login if fail
    },
    {
        path: 'find-jobs',
        component: FindJobsComponent
        // TODO create Auth Guard (canActivate) to authenticate user and redirect to login if fail
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: '**',
        redirectTo: 'no-page-found'
    }
];

export const JolterRoutes = RouterModule.forRoot( appRoutes, { useHash: true } );