import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MenuData } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menus = MenuData;
  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateTo(menu: Menu): void {

    if (this.lastSelectedMenu)
      this.lastSelectedMenu.isActive = false;

    menu.isActive = true;

    this.router.navigate([menu.url]);

    this.lastSelectedMenu = menu;
  }
}
