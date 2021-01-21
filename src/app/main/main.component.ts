import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LowDBService } from '../core/services';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

interface SideBarMenuItem {
  readonly label: string;
  readonly icon: string;
  readonly routerLink: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public sideBarCollapsed: boolean;
  public sideBarHidden: boolean;
  public menuItems: SideBarMenuItem [] = [
    { label: "Budgets", icon: "attach_money", routerLink: "budget" },
    { label: "Reports", icon: "bar_chart", routerLink: "report" }
  ]

  constructor(
    private db: LowDBService,
    private breakpointObs: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.checkViewportForSidebar();
  }

  checkViewportForSidebar() {
    const defaultCollapsedQuery = '(max-width: 1439px) and (min-width: 992px)';
    const defaultHiddenQuery = '(max-width: 991px)'
    this.breakpointObs
      .observe([defaultCollapsedQuery, defaultHiddenQuery])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[defaultCollapsedQuery]) {
          this.sideBarCollapsed = true;
          this.sideBarHidden = false;
        } else if (state.breakpoints[defaultHiddenQuery]) {
          this.sideBarHidden = true;
          this.sideBarCollapsed = false;
        } else {
          this.sideBarCollapsed = false;
          this.sideBarHidden = false;
        }
      })
  }
}
