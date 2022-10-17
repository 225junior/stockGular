import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-cmd-client-fournisseur',
  templateUrl: './new-cmd-client-fournisseur.component.html',
  styleUrls: ['./new-cmd-client-fournisseur.component.scss']
})
export class NewCmdClientFournisseurComponent implements OnInit {

  origin = '';

  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.origin = data['origin'] })
  }

}
