import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userData = {
    firstName: 'Joel',
    lastName: 'Parks',
    userName: 'Joel Parks',
    phone: '555-555-5555',
    email: 'joel_parks@example.com',
    passWord: ''
  }

  constructor() { }

  getUserData() {
    return this.userData;
  }

  setUserData(newData: any) {
    this.userData = newData;
  }
}
