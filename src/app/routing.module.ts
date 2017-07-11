// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";

// import {HomeComponent} from "../home/home.component";

// import {CatalogComponent} from "../catalog/catalog.component";
// import {ContactUsComponent} from "../contact-us/contact-us.component";
// import {NotFoundComponent} from "../not-found/not-found.component";
// import {RegistrationComponent} from "../registration/registration.component";

// const routes: Routes = [
//     {path: "", redirectTo:"Home", pathMatch:"full"},
//     {path: "Home", component: HomeComponent},
//     //Add routing for new component

//     {path: "Catalog", component: CatalogComponent},
//     {path: "Contact-Us", component: ContactUsComponent},
//     {path: "Registration", component: RegistrationComponent},
//      //Umached path must be in the and of all routes
//     {path: "**", component:NotFoundComponent}
// ]
// @NgModule({
//     "imports": [RouterModule.forRoot(routes)],
//     "exports": [RouterModule]
// })


import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegistrationComponent } from "./registration/registration.component";

const ROUTES: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "registration", component: RegistrationComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class RoutingModule { }