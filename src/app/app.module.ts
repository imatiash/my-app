import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {boldDirective} from './directives/bold.directive';
import {WhileDirective} from './directives/while.directive';

import {AppRoutingModule} from './modules/routing.module';

import {FactorialPipe} from './pipes/factorial.pipe';
import {JoinPipe} from './pipes/join.pipe';

import {UserService} from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    boldDirective,
    WhileDirective,
    FactorialPipe,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
