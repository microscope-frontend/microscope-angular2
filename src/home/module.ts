import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import { HomeComponent } from './components/home';
import { WelcomeComponent } from './components/welcome';

@NgModule({
    declarations: [HomeComponent, WelcomeComponent],
    imports     : [BrowserModule, FormsModule, HttpModule],
})
export class HomeModule {
}