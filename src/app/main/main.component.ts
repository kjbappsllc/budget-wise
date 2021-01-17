import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LowDBService } from '../core/services';
import { v4 } from 'uuid'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private db: LowDBService
  ) {}

  ngOnInit(): void { }

  public onAddBudgetClicked() {
    console.log('Add Budget Clicked')
  }
}
