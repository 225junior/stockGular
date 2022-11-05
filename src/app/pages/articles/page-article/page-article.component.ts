import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerProxy } from 'src/app/resources/utilisateur.controller.proxy';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {

  constructor(
    private router: Router,
    private test: UserControllerProxy
  ) { }

  ngOnInit(): void {
    this.getAll()
  }


  nouvelArticle(): void {
    this.router.navigate(['nouvel-article'])
  }


  getAll() {
    this.test.test().subscribe(data => {
      console.log(data)
    })
  }
}
