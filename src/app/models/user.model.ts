export class User {
    profileImage: URL;
    firstName: string;
    lastName: string;

    constructor(profileImage: URL, firstName: string, lastName: string) {
        this.profileImage = profileImage;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
