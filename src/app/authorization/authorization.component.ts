import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import {RegExpCommon } from "../common/regexp.common";
import { AuthService } from "../services/auth.service";
import { User } from "../models/user";

@Component({
    selector: "app-authorization",
    templateUrl: "./authorization.component.html",
    styleUrls: ["./authorization.component.styl"]
})

export class AuthorizationComponent implements OnInit {
    message: string;
user: User;
loginForm: FormGroup;
    constructor(
        public authService: AuthService,
        public router: Router,
        private formBuilder: FormBuilder
    ) {}

    logIn() {
        this.message = "Logging in...";
        let email = this.loginForm.controls["email"].value;
        console.log(email);
        let pass = this.loginForm.controls["pass"].value;
         console.log(pass);
        if(this.loginForm.valid){
        this.authService.logIn(email, pass).subscribe(
            user => { 
                this.user =user;
                this.setMessage();
                if (this.authService.isLoggedIn) {
                    let redirect: string = this.authService.redirectUrl ? this.authService.redirectUrl : "/admin";

                    this.router.navigate([redirect]);
                } 
            }
        )
        }
        
    }

    logOut() {
        this.authService.logOut();
        this.setMessage();
    }

    setMessage() {
        this.message = `You are logged ${this.authService.isLoggedIn ? "in" : "out"}`;
    }

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
        email: [null, Validators.required],
        pass: [null, Validators.required],
        });
}

}