import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { UserAuth } from '../models/user-auth.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concat';

@Injectable()
export class AccountService {
  loggedIn: boolean;
  currentUser: User;
  userAccounts: Array<User>;
  userAccountAuths: Array<UserAuth>;

  constructor() {
    this.loggedIn = false;
    this.userAccounts = [new User(new URL('https://api.adorable.io/avatars/285/test-user@adorable.png'),
                                  'Test',
                                  'User',
                                  new UserAuth('test', 'password')
                                )
                         ];
    this.userAccountAuths = this.getJustAuths();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  findUserFromAuth(auth: UserAuth): User {
    console.log(auth.username);
    return this.userAccounts.find(account => (account.userAuth.username === auth.username
                                           && account.userAuth.password === auth.password));
  }

  getJustAuths(): UserAuth[] {
    let authsOut = new Array<UserAuth>();
    // I don't work, which means I break profiles
    this.userAccounts.forEach(user => authsOut.push(user.userAuth));
    return authsOut;
  }

  attemptLogin(user: UserAuth): boolean {
    let flag = false;
    this.userAccountAuths.forEach(
      account => {if (account.username === user.username
                   && account.password === user.password) {
          flag = true;
        }
      });
    if (flag) {
      this.currentUser = this.findUserFromAuth(user);
      console.log(this.currentUser.firstName);
      this.loggedIn = true;
    }
    return flag;
  }

  attemptUserUpdate(user: User): boolean {
    let flag = this.userAccounts.includes(user);
    if (flag) {
      let userToUpdate = this.userAccounts.find(account => account === user);
      flag = userToUpdate.updateToMatch(user);
    }
    return flag;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

}
