import { Routes } from '@angular/router';

import { HomeComponent } from './components/home';
import { WelcomeComponent } from './components/welcome';

export const homeRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'Welcome',  component: WelcomeComponent }
];