import { Component, OnInit } from '@angular/core';
import { MenuData } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
public menu = MenuData;

  constructor() { }

  ngOnInit(): void {
  }

}
