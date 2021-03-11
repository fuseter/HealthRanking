import { JsonPipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: any;
  password: any;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public navController: NavController
  ) {}

  ngOnInit() {}
  signUp() {
    this.authService.RegisterUser(this.email, this.password).then((res) => {
      console.log('register => ', res);
      const datajson = JSON.stringify(res)
      this.router.navigate(['user-detail', datajson]);
    });
  }

  redirectTologin(){
    this.navController.pop();
  }
}
