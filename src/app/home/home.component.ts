import { Component, OnInit } from '@angular/core';

import{boldDirective} from '../directives/bold.directive';

import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navItems: Array<string>=['Home','Shop','ContactUs'];
  users: User[];
  size: string = '24px';

  x: number = 5;

  joinItems: Array<string> = ["Apple", "Banana", "Mango", "Orange"];

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onClick()
  {
    this.size='48px'
  }

}
