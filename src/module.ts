import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app';
import { HomeModule } from './home/module';
import { appRoutes } from './router';

@NgModule({
    declarations: [AppComponent],
    imports     : [HomeModule, RouterModule.forRoot(appRoutes)],
    bootstrap   : [AppComponent]
})
export class AppModule {
}