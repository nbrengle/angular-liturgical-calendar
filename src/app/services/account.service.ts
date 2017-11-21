import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }

  isLoggedIn(): boolean {
    return true; // for now
  }
}
