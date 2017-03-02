import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { homeRoutes } from './router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
    declarations: [HomeComponent, WelcomeComponent],
    imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(homeRoutes)],
})
export class HomeModule {
}
