import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-mouve-stock-article',
  templateUrl: './detail-mouve-stock-article.component.html',
  styleUrls: ['./detail-mouve-stock-article.component.scss']
})
export class DetailMouveStockArticleComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  cancel() {
    this.router.navigate(['articles'])
  }

  register() {
    this.router.navigate(['articles'])
  }


}
