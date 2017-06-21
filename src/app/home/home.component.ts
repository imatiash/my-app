import { Component, OnInit } from '@angular/core';
// import { Response } from '@angular/http'

// import { NgForm } from '@angular/forms'

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import{boldDirective} from '../directives/bold.directive';

import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 error: any;
 isFormSubmited: boolean = false;

  users: User[];
  selectedUser: User;

  userForm: FormGroup;

  REG_EXP: any = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

  constructor( 
    private formBuilder:FormBuilder,
    private userService: UserService) 
    {
    // this.users = this.userService.getUsers();
    }

  ngOnInit():void {
  this.userForm = this.formBuilder.group({
    id: [this.selectedUser? this.selectedUser.id: null],
    firstName: [this.selectedUser? this.selectedUser.firstName: null, Validators.required],
    lastName: [this.selectedUser? this.selectedUser.lastName: null, Validators.required],
    email: [this.selectedUser? this.selectedUser.email: null, [Validators.required, Validators.pattern(this.REG_EXP)]],
    age: [this.selectedUser? this.selectedUser.age: null, Validators.required]
  });

  //Promise
      this.userService.getUsers().
      then(
        data=> this.users = data
      ) 

  //Observable
      // this.userService.getUsers()
      // .subscribe(
      //   data => this.users = data,
      //   err => {
      //     this.error = err;
      //     console.log(this.error);
      //   }
      // )   
  }

  onSubmit( e: Event, form:FormGroup) {
    this.isFormSubmited = true;
    e.preventDefault();

    this.userForm.controls["firstName"].markAsUntouched();
   this.userForm.controls["lastName"].markAsUntouched();
   this.userForm.controls["email"].markAsUntouched();
   this.userForm.controls["age"].markAsUntouched();
   
    if(this.userForm.valid){
     let user:User = form.value;
    //  this.userService.addUser(user);
     this.userForm.reset();
     this.isFormSubmited = false;
    }
  }

clearControlValidation(name:string){
  this.userForm.controls[name].markAsTouched();
}
  onSelect(user:User){
  this.selectedUser = user;
  this.userForm.controls["id"].setValue(this.selectedUser.id);
  this.userForm.controls["firstName"].setValue(this.selectedUser.firstName);
  this.userForm.controls["lastName"].setValue(this.selectedUser.lastName);
  this.userForm.controls["email"].setValue(this.selectedUser.email);
  this.userForm.controls["age"].setValue(this.selectedUser.age);
  }

  // onClick()
  // {
  //   this.size='48px'
  // }

}
