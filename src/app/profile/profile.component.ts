import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

import * as wjInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('firstName') firstName: wjInput.InputMask;
  @ViewChild('lastName') lastName: wjInput.InputMask;
  @ViewChild('userName') userName: wjInput.InputMask;
  @ViewChild('phone') phone: wjInput.InputMask;
  @ViewChild('email') email: wjInput.InputMask;
  @ViewChild('password') password: wjInput.InputMask;
  userData: any;

  constructor(private profileService: ProfileService, private router: Router) {
    this.userData = profileService.getUserData();
  }

  ngOnInit(): void {
  }

  saveUserData() {
    var updatedUser = { firstName: this.firstName.value, lastName: this.lastName.value, userName: this.userName.value, phone: this.phone.value, email: this.email.value, password: this.password.value };
    this.profileService.setUserData(updatedUser);
    this.router.navigate(['dashboard']);
  }

}
