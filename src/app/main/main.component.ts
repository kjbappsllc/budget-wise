import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LowDBService } from '../core/services';
import { CategoryGroup } from '../core/models/group';

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
}
