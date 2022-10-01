import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-client-fournisseur',
  templateUrl: './page-cmd-client-fournisseur.component.html',
  styleUrls: ['./page-cmd-client-fournisseur.component.scss']
})
export class PageCmdClientFournisseurComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  nouvelleCommande(): void {
    this.router.navigate(['nouvelle-commande-client'])
  }

}
