import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{boldDirective} from './directives/bold.directive';

import {AppRoutingModule} from './modules/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    boldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
