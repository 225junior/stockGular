import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nouvelle-categorie',
	templateUrl: './nouvelle-categorie.component.html',
	styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent implements OnInit {

	constructor(
		private router: Router
	) { }

	ngOnInit(): void {
	}

	register() {
		throw new Error('Method not implemented.');
	}
	cancel() {
		this.router.navigate(['categories'])
	}
}
