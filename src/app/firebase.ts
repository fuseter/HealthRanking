import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  uid: any;
  constructor(
    private firestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    const tmpUser = JSON.parse(localStorage.getItem('user'));
    this.uid = tmpUser['uid'];
  }

  createUserData(userDetail: any) {
    return this.firestore
      .collection('user')
      .doc(userDetail.uid)
      .set({
        age: userDetail.age,
        gender: userDetail.gender,
        height: userDetail.height,
        nickname: userDetail.nickname,
        weight: userDetail.weight,
      })
      .then(() => {
        this.router.navigate(['login']);
      });
  }
  readUserData() {
    return this.firestore.collection(`user`).doc(this.uid).valueChanges();
  }

  updateUserData(tmpUserprofile: any) {
    return this.firestore.doc('user/' + this.uid).update(tmpUserprofile);
  }

  readRanking(){
    return this.firestore.collection('ranking').snapshotChanges()
  }


}
