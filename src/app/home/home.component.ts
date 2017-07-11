import { Component } from "@angular/core";
import { Animations } from "../common/animations.common";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.styl"],
    animations: [Animations.FLY_IN_OUT, Animations.USER_STATE]
})
export class HomeComponent {
    
}

// import { 
//   Component, 
//   OnChanges,
//   OnInit,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy
//     } from "@angular/core";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms"
// import{boldDirective} from "../directives/bold.directive";
// import {User} from "../models/user";
// import {UsersService} from "../services/users.service";
// // imported animations from common animation module
// import { Animations } from "../common/animations.common";
//  import {OrderByPipe} from "../pipes/orderby.pipe";

// @Component({
//   selector: "app-home",
//   templateUrl: "./home.component.html",
//   styleUrls: ["./home.component.styl"],
//   animations: [Animations.FLY_IN_OUT, Animations.USER_STATE]
// })
// export class HomeComponent 
// implements  OnChanges,
//             OnInit,
//             DoCheck,
//             AfterContentInit,
//             AfterContentChecked,
//             AfterViewInit,
//             AfterViewChecked,
//             OnDestroy  {

//  // error: any;
//  isFormSubmitted: boolean = false;

//   users: User[];
//   user: User;
//   selectedUser: User;

//   userForm: FormGroup;

//   REG_EXP: any = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

//   constructor( 
//     private formBuilder:FormBuilder,
//     private userService: UsersService) 
//     {
//     // this.users = this.userService.getUsers();
//     }
  
//      addNewUser() {
//         this.selectedUser = new User();
//     }

//   ngOnChanges() {
//     console.log("OnChanges");
//   }

//   ngDoCheck() {
//     console.log("ngDoCheck");
//   }
//   ngAfterContentInit() {
//     console.log("ngAfterContentInit");
//   }
//   ngAfterContentChecked() {
//     console.log("ngAfterContentChecked");
//   }
//   ngAfterViewInit() {
//     console.log("ngAfterViewInit");
//   }
//   ngAfterViewChecked() {
//     console.log("ngAfterViewChecked");
//   }
//   ngOnDestroy() {
//     console.log("ngOnDestroy");
//   }
//   ngOnInit():void {
//     console.log("ngOnInit");

//   this.userForm = this.formBuilder.group({
//     id: [this.selectedUser ? this.selectedUser.id: null],
//     firstName: [this.selectedUser ? this.selectedUser.firstName: null, Validators.required],
//     lastName: [this.selectedUser ? this.selectedUser.lastName: null, Validators.required],
//     email: [this.selectedUser ? this.selectedUser.email: null, [Validators.required, Validators.pattern(this.REG_EXP)]]
//   });

//   //Promise
//       this.userService.getUsers().
//       then(
//         data => this.users = data
//       ) 

//   //Observable
//       // this.userService.getUsers()
//       // .subscribe(
//       //   data => this.users = data,
//       //   err => {
//       //     this.error = err;
//       //     console.log(this.error);
//       //   }
//       // )   
//   }

//   onSubmit( e: Event, form:FormGroup) {
//     this.isFormSubmitted = true;
//     e.preventDefault();

//    this.userForm.controls["firstName"].markAsUntouched();
//    this.userForm.controls["lastName"].markAsUntouched();
//    this.userForm.controls["email"].markAsUntouched();
//    this.userForm.controls["age"].markAsUntouched();
   
//      if (!this.userForm.invalid) {
//      let user:User = form.value;
//     //  this.userService.addUser(this.users, user);
//      this.userForm.reset();
//      this.isFormSubmitted = false;
//     }
//   }

//   // // Method which will be called on form submit
//   //   onSubmit(e: Event, form: FormGroup) {
//   //       this.isFormSubmitted = true;
//   //       // e.preventDefault() to disable of page reloading after submit
//   //       e.preventDefault();
//   //       // Update controls value and validity
//   //       this.userForm.controls["firstName"].updateValueAndValidity();
//   //       this.userForm.controls["lastName"].updateValueAndValidity();
//   //       this.userForm.controls["email"].updateValueAndValidity();
//   //       // Mark controls as touched to see error messages
//   //       this.userForm.controls["firstName"].markAsTouched();
//   //       this.userForm.controls["lastName"].markAsTouched();
//   //       this.userForm.controls["email"].markAsTouched();
        
//   //       if (this.userForm.valid) {
//   //           if(this.selectedUser.id === null) {
//   //               this.userForm.controls["id"].setValue(this.users.length);
//   //               this.users.push(form.value);
//   //           }
//   //           // Added variable user as form value to push new user
//   //           let user: User = form.value;
//   //           // this.userService.addUser(user);
//   //           this.userForm.reset();
//   //           this.isFormSubmitted = false;
//   //       }
//   //   }

// clearControlValidation(name:string){
//   // this.userForm.controls[name].markAsTouched();
//         this.userForm.controls[name].markAsPending();
//         this.userForm.controls[name].markAsUntouched();
// }

//     onMouseEnter(user: User) {
//         this.user = user;
//         this.user.state = "active";
//     }

//     onMouseLeave(user: User) {
//         this.user = user;
//         this.user.state = "inactive";
//     }

//   onSelect(user:User){
//   this.selectedUser = user;
//   this.userForm.controls["id"].setValue(this.selectedUser.id);
//   this.userForm.controls["firstName"].setValue(this.selectedUser.firstName);
//   this.userForm.controls["lastName"].setValue(this.selectedUser.lastName);
//   this.userForm.controls["email"].setValue(this.selectedUser.email);
//   }

// }
