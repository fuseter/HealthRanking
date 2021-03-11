import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firebase } from '../firebase';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {
    const tmpUser = JSON.parse(localStorage.getItem('user'));
    if (tmpUser !== undefined && tmpUser !== null) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {}

  login() {
    this.authService.SignIn(this.email, this.password).then((res) => {
      console.log('UserSign => ', res);
      this.router.navigate(['home']);
    });
  }

  redirectToregister() {
    this.router.navigate(['register']);
  }
}
