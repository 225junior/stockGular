import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {

  // @Input

  @Output()
  clickEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  buttonNouveauClicked(): void {
    this.clickEvent.emit();
  }

}
