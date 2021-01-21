import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainRoutingModule } from './main/main-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    MainRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
