import { ContactsListComponent } from './contacts-list/index';
import { ContactsDetailComponent } from './contacts-detail/index';
//import { Route } from '../models/route';
import { RouterConfig } from '@angular/router';

export const ContactsRoutes: RouterConfig = [
    { path: '/', component: ContactsListComponent, index: true },
    { path: 'contacts/:id', component: ContactsDetailComponent }
]; 