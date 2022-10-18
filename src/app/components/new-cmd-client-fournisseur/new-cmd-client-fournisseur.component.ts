import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { constantes } from 'src/app/shared/consts';

@Component({
  selector: 'app-new-cmd-client-fournisseur',
  templateUrl: './new-cmd-client-fournisseur.component.html',
  styleUrls: ['./new-cmd-client-fournisseur.component.scss']
})
export class NewCmdClientFournisseurComponent implements OnInit {

  origin = '';

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.origin = data['origin'] })
  }

  cancel() {
    if (this.origin === constantes.CLIENT)
      this.router.navigate(['commande-client'])
    else
      this.router.navigate(['commande-fournisseur'])
  }

  register() {
    this.router.navigate(['articles'])
  }


}
