import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { BudgetComponent } from './budget/budget.component'
import { PageNotFoundComponent } from '../shared/components';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'budget',
        component: BudgetComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
