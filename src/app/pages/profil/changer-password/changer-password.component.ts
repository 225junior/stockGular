import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-password',
  templateUrl: './changer-password.component.html',
  styleUrls: ['./changer-password.component.scss']
})
export class ChangerPasswordComponent implements OnInit {
  changerMotDePasseUtilisateur() {
    throw new Error('Method not implemented.');
  }

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  cancel() {
    this.router.navigate(['profil']);
  }


}
