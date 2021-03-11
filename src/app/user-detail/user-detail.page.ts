import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Firebase } from '../firebase';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  nickname: any;
  age: any;
  height: any;
  weight: any;
  gender: any;
  uid: any;

  constructor(
    public navController: NavController,
    public activatedRoute: ActivatedRoute,
    private firebase: Firebase
  ) {}

  ngOnInit() {
    const resData = this.activatedRoute.snapshot.paramMap.get('res');
    const resJson = JSON.parse(resData);
    console.log('ค่าที่ส่งมาohfsojv;sv =>', resJson['user']['uid']);
    this.uid = resJson['user']['uid'];
  }

  register() {
    const userDetail = {
      age: this.age,
      gender: this.gender,
      height: this.height,
      nickname: this.nickname,
      weight: this.weight,
      uid: this.uid,
    };
    this.firebase.createUserData(userDetail);
  }
}
