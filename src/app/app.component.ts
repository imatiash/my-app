import { Component } from '@angular/core';

//Add new class for navigation items elements
export class NavItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'ITEA Shop';

  //Variable with navigation items
  navItems: NavItem[]  = [
    { name: "Home", link: "Home" },
    { name: "Catalog", link: "Catalog" },
    { name: "Contact-Us", link: "Contact-Us" },
  ]
}
