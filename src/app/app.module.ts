import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/routing.module';
import { boldDirective } from './directives/bold.directive';
import { FactorialPipe } from './pipes/factorial.pipe';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { JoinPipe } from './pipes/join.pipe';
import { UserService } from './services/user.service';
import { WhileDirective } from './directives/while.directive';

import { CatalogComponent } from './catalog/catalog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';



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
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
