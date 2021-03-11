import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  bmicalculate(){
    this.router.navigate(['bmiscreen']);
  }
  bmrcalculate(){
    this.router.navigate(['bmrscreen']);
  }






}
