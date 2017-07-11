
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { 
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdToolbarModule,
} from "@angular/material";

import { AdminModule } from "./admin/admin.module";
import { CatalogModule } from "./catalog/catalog.module";
import { RoutingModule } from "./routing.module";

import { AppComponent } from "./app.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegistrationComponent } from "./registration/registration.component";

import { UsersService } from "./services/users.service";

import "hammerjs";

@NgModule({
    declarations: [
        AppComponent,
        AuthorizationComponent,
        ContactUsComponent,
        HomeComponent,
        NotFoundComponent,
        RegistrationComponent
    ],
    imports: [
        AdminModule,
        BrowserAnimationsModule,
        BrowserModule,
        CatalogModule,
        FormsModule,
        HttpModule,
        MdButtonModule,
        MdInputModule,
        MdTabsModule,
        MdToolbarModule,
        ReactiveFormsModule,
        RoutingModule
    ],
    providers: [UsersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { NgModule } from "@angular/core";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { HttpModule } from "@angular/http";
// import { 
//     MdButtonModule,
//     MdInputModule,
//     MdToolbarModule,
// } from "@angular/material";

// import { AppRoutingModule } from "./modules/routing.module";

// import { AppComponent } from "./app.component";
// import { AuthorizationComponent } from "./authorization/authorization.component";
// import { ContactUsComponent } from "./contact-us/contact-us.component";
// import { HomeComponent } from "./home/home.component";
// import { NotFoundComponent } from "./not-found/not-found.component";
// import { RegistrationComponent } from "./registration/registration.component";

// import { UsersService } from "./services/user.service";

// import { OrderByPipe } from "./pipes/orderby.pipe";
// import { SearchFilterPipe } from "./pipes/searchfilter.pipe";

//  import { boldDirective } from "./directives/bold.directive";

// import "hammerjs";
// import { HeroListComponentComponent } from './hero-list-component/hero-list-component.component';
// import { CategoryComponent } from './category/category.component';

// @NgModule({
//     declarations: [
//         AppComponent,
//         AuthorizationComponent,
//         ContactUsComponent,
//         HomeComponent,
//         NotFoundComponent,
//         RegistrationComponent,
//         OrderByPipe,
//         SearchFilterPipe,
//         boldDirective,
//         HeroListComponentComponent,
//         CategoryComponent
//     ],
//     imports: [
//         BrowserAnimationsModule,
//         BrowserModule,
//         FormsModule,
//         HttpModule,
//         MdButtonModule,
//         MdInputModule,
//         MdToolbarModule,
//         ReactiveFormsModule,
//         AppRoutingModule
//     ],
//     providers: [UsersService],
//     bootstrap: [AppComponent]
// })
// export class AppModule { }