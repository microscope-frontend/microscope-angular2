import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const homeRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'welcome',  component: WelcomeComponent }
];
