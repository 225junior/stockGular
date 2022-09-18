import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuData } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu = MenuData;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

}
