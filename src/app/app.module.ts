import { BrowserModule } from "@angular/platform-browser";
// Imported Animations module fro angular animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./modules/routing.module";
import { boldDirective } from "./directives/bold.directive";
import { FactorialPipe } from "./pipes/factorial.pipe";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { JoinPipe } from "./pipes/join.pipe";
import { UserService } from "./services/user.service";
import { WhileDirective } from "./directives/while.directive";

import { CatalogComponent } from "./catalog/catalog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PhoneComponent } from "./phone/phone.component";

import {HttpModule} from "@angular/http";
import { RegistrationComponent } from "./registration/registration.component";
// Import hammerjs for angular material
import "hammerjs";
import { AuthorizationComponent } from "./authorization/authorization.component";

import {MaterialModule} from '@angular/material';

// import {
//     MdToolbarModule,
//     MdIconModule,
//     MdMenuModule,
//     MdButtonModule,
//     MdSelectModule,
//     MdSnackBarModule,
//     MdSnackBar, MdInputModule
// } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    boldDirective,
    FactorialPipe,
    JoinPipe,
    HomeComponent,
    WhileDirective,
    CatalogComponent,
    ContactUsComponent,
    NotFoundComponent,
    PhoneComponent,
    RegistrationComponent,
    AuthorizationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
