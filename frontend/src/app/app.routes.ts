import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { App } from './app';
import { Header } from './components/header/header';
import { UserForm } from './components/user-form/user-form';

export const routes: Routes = [
    { path: '', redirectTo: '/home/user', pathMatch: 'full' },
    { path: 'home/user', component: Home },
    { path: 'header', component: Header },
    { path: 'create-user', component: UserForm },
    { path: 'edit-user/:id', component: UserForm },
    { path: 'bharath', component: App }
];
