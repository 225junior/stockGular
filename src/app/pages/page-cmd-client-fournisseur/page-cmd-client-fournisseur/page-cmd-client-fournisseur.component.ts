import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constantes } from 'src/app/shared/consts';

@Component({
  selector: 'app-page-cmd-client-fournisseur',
  templateUrl: './page-cmd-client-fournisseur.component.html',
  styleUrls: ['./page-cmd-client-fournisseur.component.scss']
})
export class PageCmdClientFournisseurComponent implements OnInit {

  origin = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.origin = data['origin'] })
  }

  nouvelleCommande(): Promise<boolean> {
    if (this.origin === constantes.CLIENT)
      return this.router.navigate(['nouvelle-commande-client'])
    else
      return this.router.navigate(['nouvelle-commande-fournisseur'])
  }

}
