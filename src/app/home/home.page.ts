import { Component, OnInit } from '@angular/core';
import { Firebase } from '../firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private firebase: Firebase) {}
  nickname: any;
  gender: any;
  age: any;
  weight: any;
  height: any;
  name: any;
  bmi: any;
  bmr: any;
  tdee: any;
  today = new Date();
  curHr = this.today.getHours();
  CurTime: any;

  ngOnInit() {
    this.firebase.readUserData().subscribe((data) => {
      try {
        this.nickname = data['nickname'];
        this.gender = data['gender'];
        this.age = data['age'];
        this.weight = data['weight'];
        this.height = data['height'];
        this.bmi = data['bmi'];
        this.bmr = data['bmr'];
        this.tdee = data['tdee'];
        if ((this.bmi = data['bmi'] === undefined)) {
          this.bmi = 0;
        } else {
          this.bmi = data['bmi'];
        }
        if ((this.bmr = data['bmr'] === undefined)) {
          this.bmr = 0;
        } else {
          this.bmr = data['bmr'];
        }
        if ((this.tdee = data['tdee'] === undefined)) {
          this.tdee = 0;
        } else {
          this.tdee = data['tdee'];
        }
      } catch (error) {
        console.log('login error =>', error);
      }
    });

    if (this.curHr < 12) {
      this.CurTime = 'สวัสดีตอนเช้า';
    } else if (this.curHr < 18) {
      this.CurTime = 'สวัสดีตอนบ่าย';
    } else {
      this.CurTime = 'สวัสดีตอนเย็น';
    }
  }
}
