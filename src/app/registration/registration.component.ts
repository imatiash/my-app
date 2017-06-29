import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import { RegExpCommon } from  "../common/regexp.common";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    isFormSubmitted: boolean = false;
    registrationForm: FormGroup;
    showSuccessMessage: boolean = false;
    user: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.user = new User();
    this.registrationForm = this.formBuilder.group({
    id: [null],
    firstName: [null, Validators.required],
    lastName: [ null, Validators.required],
    email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
    age: [null, Validators.required]
  });
  }


onSubmitRegistration(e: Event, data: FormGroup) {
        e.preventDefault();
        this.user = this.registrationForm.value;
        this.userService.registerUser(this.user)
            .then(
                () => this.showSuccessMessage = true
            )
            .catch(
                e => console.error(e)
            )
    }
}

