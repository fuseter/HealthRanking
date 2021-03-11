import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmrscreenPage } from './bmrscreen.page';

const routes: Routes = [
  {
    path: '',
    component: BmrscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmrscreenPageRoutingModule {}
