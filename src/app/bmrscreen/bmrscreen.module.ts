import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmrscreenPageRoutingModule } from './bmrscreen-routing.module';

import { BmrscreenPage } from './bmrscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmrscreenPageRoutingModule
  ],
  declarations: [BmrscreenPage]
})
export class BmrscreenPageModule {}
