import { UserAuth } from './user-auth.model';

export class User {
  profileImage: URL;
  firstName: string;
  lastName: string;
  userAuth: UserAuth;

  constructor(
    profileImage: URL,
    firstName: string,
    lastName: string,
    userAuth: UserAuth
  ) {
      this.profileImage = profileImage;
      this.firstName = firstName;
      this.lastName = lastName;
      this.userAuth = userAuth;
  }

  updateToMatch(userIn: User): boolean {
    this.profileImage = userIn.profileImage;
    this.firstName = userIn.firstName;
    this.lastName = userIn.lastName;
    this.userAuth = userIn.userAuth;
    return true;
  }

}
