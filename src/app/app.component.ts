import { Component } from '@angular/core';
import { AuthenticationService } from './shared/authentication-service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  email: any;
  public appPages = [
    { title: 'หน้าแรก', url: 'home', icon: 'planet' },
    { title: 'วิเคราะห์สุขภาพ', url: 'calculate', icon: 'finger-print' },
    { title: 'อันดับ', url: 'ranking', icon: 'ribbon' },
    { title: 'โปรไฟล์', url: 'profile', icon: 'person' },
    // { title: 'ออกจากระบบ', url: '/folder/Trash', icon: 'trash' },
  ];

  constructor(public authService: AuthenticationService) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null && user !== undefined) {
      this.email = user['email'];
    } else {
      console.log('User not found !!!');
    }
  }
}
