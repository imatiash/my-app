import { Component, OnInit } from '@angular/core';

import{boldDirective} from '../directives/bold.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 navItems: Array<string>=['Home','Shop','ContactUs']
  size: string = '24px';
  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.size='48px'
  }

}
