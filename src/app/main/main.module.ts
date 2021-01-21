import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIcon} from '@angular/material/icon';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [MainComponent, BudgetComponent],
  imports: [CommonModule, SharedModule, MainRoutingModule, MatIconModule]
})
export class MainModule {}
