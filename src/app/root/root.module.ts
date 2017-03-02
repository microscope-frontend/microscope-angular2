import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { appRoutes } from './router';
import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, HomeModule, RouterModule.forRoot(appRoutes, {useHash: true})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
