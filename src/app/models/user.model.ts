import { UserAuth } from './user-auth.model';


export class User {
    profileImage: URL;
    firstName: string;
    lastName: string;
    auth: UserAuth;

    constructor(
      profileImage: URL,
      firstName: string,
      lastName: string,
      auth: UserAuth
    ) {
        this.profileImage = profileImage;
        this.firstName = firstName;
        this.lastName = lastName;
        this.auth = auth;
    }
}
