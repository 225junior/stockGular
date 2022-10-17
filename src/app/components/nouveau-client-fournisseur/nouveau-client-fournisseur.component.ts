import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouveau-client-fournisseur',
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrls: ['./nouveau-client-fournisseur.component.scss']
})
export class NouveauClientFournisseurComponent implements OnInit {

  origin = '';
  constructor(
    public activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.origin = data['origin'] })
  }

}
