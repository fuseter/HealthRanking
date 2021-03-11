import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiscreenPageRoutingModule } from './bmiscreen-routing.module';

import { BmiscreenPage } from './bmiscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiscreenPageRoutingModule
  ],
  declarations: [BmiscreenPage]
})
export class BmiscreenPageModule {}
