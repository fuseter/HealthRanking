import { Component, OnInit } from '@angular/core';
import { Firebase } from '../firebase';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {
  rankGold = [];
  ranksilver = [];
  rankcopper = [];
  ranking = [];
  constructor(private firebase: Firebase) {}

  ngOnInit() {
    this.firebase.readRanking().subscribe((data) => {
      this.ranking = data.map((e) => {
        return {
          nickname: e.payload.doc.data()['nickname'.toString()],
          bmi: e.payload.doc.data()['bmi'.toString()],
        };
      });
      this.classify();
    });
  }

  classify() {
    this.ranking.map((res) => {
      if (Number(res.bmi) > 30) {
        this.rankcopper.push(res);
      } else if (Number(res.bmi) >= 25) {
        this.ranksilver.push(res);
      } else if (Number(res.bmi) >= 18.5) {
        this.rankGold.push(res);
      } else if (Number(res.bmi) < 18.5) {
        this.ranksilver.push(res);
      }
    });

    console.log('rankGold => ', this.rankGold);
    console.log('ranksilver => ', this.ranksilver);
    console.log('rankcopper => ', this.rankcopper);
  }
}
