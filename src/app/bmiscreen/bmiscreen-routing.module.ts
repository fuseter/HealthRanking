import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiscreenPage } from './bmiscreen.page';

const routes: Routes = [
  {
    path: '',
    component: BmiscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiscreenPageRoutingModule {}
