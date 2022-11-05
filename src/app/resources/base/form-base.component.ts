import { ChangeDetectorRef, Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { listLocales } from 'ngx-bootstrap';
import { BaseComponent } from './base.component';

// @Component({}) OBLIGATOIRE A PARTIR D'ANGULAR 7
// POUR EVITER UNE ERREUR L'ORSQU'IL APPEL LA BASE
export class FormBaseComponent extends BaseComponent {

  dialogRefClose: any;
  locale = 'fr';
  locales = listLocales();


  onSubmitted = false;


  protected fb: FormBuilder;
  protected cd: ChangeDetectorRef;


  constructor(
    injector: Injector,) {
    super(injector);
    this.fb = injector.get(FormBuilder);
    this.cd = injector.get(ChangeDetectorRef);

  }

  // toastrSuccess() {
  // 	this.toastr.success('Enregistrement effectué avec succès');
  // }

  // toastrError(error) {
  // 	this.toastr.error(error.message);
  // }

  findCommonElement(array1, array2) {

    // Boucle for array1
    for (let i = 0; i < array1.length; i++) {

      // Boucle for array2
      for (let j = 0; j < array2.length; j++) {

        // Comparer les elements de la each and
        // every element from both of the
        // arrays
        if (array1[i] === array2[j]) {

          // Retourne si un element est trouvé
          return true;
        }
      }
    }

    // Retourne si aucun elements existes
    return false;
  }


}
