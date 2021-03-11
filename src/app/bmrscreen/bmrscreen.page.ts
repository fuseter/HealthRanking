import { Component, OnInit } from '@angular/core';
import { Firebase } from '../firebase';

@Component({
  selector: 'app-bmrscreen',
  templateUrl: './bmrscreen.page.html',
  styleUrls: ['./bmrscreen.page.scss'],
})
export class BmrscreenPage implements OnInit {
  Weight: number;
  height: number;
  Age: number;
  Male: any;
  female: any;
  bmr: any;
  level: any;
  tdee: any;

  constructor(private firebase: Firebase) {}

  ngOnInit() {}

  sendData() {
    if (this.Male === true) {
      this.bmr = (66 + 13.7 * this.Weight + 5 * this.height - 6.8 * this.Age).toFixed(0);
      if (this.level === 'level_1') {
        this.tdee = (this.bmr * 1.2).toFixed(2);
      } else if (this.level === 'level_2') {
        this.tdee = (this.bmr * 1.375).toFixed(2);
      } else if (this.level === 'level_3') {
        this.tdee = (this.bmr * 1.55).toFixed(2);
      } else if (this.level === 'level_4') {
        this.tdee = (this.bmr * 1.725).toFixed(2);
      } else if (this.level === 'level_5') {
        this.tdee = (this.bmr * 1.9).toFixed(2);
      }
      console.log('Male');
      console.log('bmr' + this.bmr);
      console.log('tdee' + this.tdee);
    } else if (this.female === true) {
      this.bmr = (665 + 9.6 * this.Weight + 1.8 * this.height - 4.7 * this.Age).toFixed(0);
      if (this.level === 'level_1') {
        this.tdee = (this.bmr * 1.2).toFixed(2);
      } else if (this.level === 'level_2') {
        this.tdee = (this.bmr * 1.375).toFixed(2);
      } else if (this.level === 'level_3') {
        this.tdee = (this.bmr * 1.55).toFixed(2);
      } else if (this.level === 'level_4') {
        this.tdee = (this.bmr * 1.725).toFixed(2);
      } else if (this.level === 'level_5') {
        this.tdee = (this.bmr * 1.9).toFixed(2);
      }
      console.log('Female');
      console.log('bmr' + this.bmr);
      console.log('tdee' + this.tdee);
    }

    const tmpUserprofile = {};
    tmpUserprofile['bmr'] = this.bmr;
    tmpUserprofile['tdee'] = this.tdee;
    this.firebase.updateUserData(tmpUserprofile);
  }
}
