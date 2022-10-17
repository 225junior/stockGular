import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.scss']
})
export class PageFournisseurComponent implements OnInit {
  origin = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.origin = data['origin'] })
    console.log(this.origin)
  }

  nouveauFournisseur() {
    this.router.navigate(['nouveau-fournisseur'])

  }
}
