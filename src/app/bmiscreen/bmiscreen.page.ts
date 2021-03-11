import { Component, OnInit } from '@angular/core';
import { Firebase } from '../firebase';
@Component({
  selector: 'app-bmiscreen',
  templateUrl: './bmiscreen.page.html',
  styleUrls: ['./bmiscreen.page.scss'],
})
export class BmiscreenPage implements OnInit {
  Weight: number;
  height: number;
  bmi: any;
  criterion: any;

  constructor(private firebase: Firebase) {}

  ngOnInit() {}



  bmiCalaulate() {
    this.bmi = (this.Weight / (this.height / 100) ** 2).toFixed(2);
    console.log(this.bmi);
    if (this.bmi > 30) {
      this.criterion = 'อยู่ในเกณฑ์ น้ำหนักเกิน';
      console.log('น้ำหนักเกิน' + this.bmi);
    } else if (this.bmi >= 25) {
      this.criterion = 'อยู่ในเกณฑ์ อ้วน';
      console.log('อ้วน' + this.bmi);
    } else if (this.bmi >= 18.5) {
      this.criterion = 'อยู่ในเกณฑ์ ปกติ';
      console.log('ปกติ' + this.bmi);
    } else if (this.bmi < 18.5) {
      this.criterion = 'อยู่ในเกณฑ์ ต่ํากว่าเกณฑ์';
      console.log('ต่ํากว่าเกณฑ์' + this.bmi);
    }
    const tmpUserprofile = {};
    tmpUserprofile['bmi'] = this.bmi;
    this.firebase.updateUserData(tmpUserprofile);
  }
}
