import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.scss']
})
export class PageCategoriesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  modifierCategory(id: number) {
    alert('modification')
  }


  confirmerEtSupprimerCat() {
    throw new Error('Method not implemented.');
  }
  cancel() {
    throw new Error('Method not implemented.');
  }
  nouvelleCategory(): void {
    this.router.navigate(['nouvelle-categorie'])
  }



}
