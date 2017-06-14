import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import{boldDirective} from '../directives/bold.directive';

import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //navItems: Array<string>=['Home','Shop','ContactUs'];
  // size: string = '24px';
  // x: number = 5;
  // joinItems: Array<string> = ["Apple", "Banana", "Mango", "Orange"];

  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onSubmit( e: Event, form: NgForm) {
    e.preventDefault();
    form.controls["firstName"].value;
    form.controls["lastName"].value;
    form.controls["email"].value;
     form.controls["age"].value;
      this.users.push(new User(
      form.controls["firstName"].value,
      form.controls["lastName"].value,
      form.controls["email"].value,
      form.controls["age"].value));

     this.userService.addUser( 
      form.controls["firstName"].value,
      form.controls["lastName"].value,
      form.controls["email"].value,
      form.controls["age"].value
      );
  }

  // onClick()
  // {
  //   this.size='48px'
  // }

}
