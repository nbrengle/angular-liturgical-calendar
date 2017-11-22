import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { AccountService } from '../services/account.service';
import { User } from '../models/user.model';
import { UserAuth } from 'app/models/user-auth.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit {
  profileForm: FormGroup;
  currentUser: User;

  constructor(
    private _fb: FormBuilder,
    private _accountService: AccountService
  ) {
    this.currentUser = this._accountService.getCurrentUser();
    // TODO these could-should be separate functions
    this.profileForm = _fb.group({
      'username' : ['', Validators.required],
      'password' : ['', Validators.required],
      'firstname' : ['', Validators.required],
      'lastname' : ['', Validators.required],
      'profileImageUrl' : ['', Validators.required],
    });
  }

  handleButtonPress(updatePressed: boolean) {
    updatePressed ? this.attemptUserUpdate() : this.resetProfileForm();
  }


  resetProfileForm() {
    console.log('Profile Reset');
    this.profileForm.reset();
  }

  attemptUserUpdate(): boolean {
    console.log('Profile Update Attempted');
    const form = this.profileForm.value;
    const userAttempt = new User(form.profileImageUrl,
                                 form.firstname,
                                 form.lastname,
                                 new UserAuth(form.username,
                                              form.password,
                                              )
    );
    return this._accountService.attemptUserUpdate(userAttempt);
  }

  ngOnInit() {
    this.profileForm.setValue({
      'username' : this.currentUser.userAuth.username,
      'password' : this.currentUser.userAuth.password,
      'firstname' : this.currentUser.firstName,
      'lastname' : this.currentUser.lastName,
      'profileImageUrl' : this.currentUser.profileImage,
    });
  }

}
