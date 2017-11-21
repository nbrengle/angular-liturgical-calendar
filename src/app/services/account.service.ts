import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { UserAuth } from '../models/user-auth.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/from';

@Injectable()
export class AccountService {
  loggedIn: boolean;
  currentUser: User;
  userAccounts: Array<User>;

  constructor() {
    this.loggedIn = false;
    this.userAccounts = [new User(new URL('https://api.adorable.io/avatars/285/test-user@adorable.png'),
                                  'Test',
                                  'User',
                                  new UserAuth('test-user', 'not-a-password')
                                )
                         ];
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  attemptLogin(user: UserAuth): boolean {
    return this.userAccounts.auths.includes(user);
  }
}
