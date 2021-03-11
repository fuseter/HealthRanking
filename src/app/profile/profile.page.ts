import { Component, OnInit } from '@angular/core';
import { Firebase } from '../firebase';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  nickname: any;
  gender: any;
  age: any;
  weight: any;
  height: any;
  name: any;

  constructor(private firebase: Firebase) {}

  ngOnInit() {
    this.firebase.readUserData().subscribe((data) => {
      try {
        this.nickname = data['nickname'];
        this.gender = data['gender'];
        this.age = data['age'];
        this.weight = data['weight'];
        this.height = data['height'];
        this.name = data['nickname'];
      } catch (error) {
        console.log('profile error =>', error);
      }
    });
  }

  editProfile() {
    const tmpUserprofile = {};
    tmpUserprofile['nickname'] = this.nickname;
    tmpUserprofile['gender'] = this.gender;
    tmpUserprofile['age'] = this.age;
    tmpUserprofile['weight'] = this.weight;
    tmpUserprofile['height'] = this.height;

    this.firebase.updateUserData(tmpUserprofile);
  }
}
