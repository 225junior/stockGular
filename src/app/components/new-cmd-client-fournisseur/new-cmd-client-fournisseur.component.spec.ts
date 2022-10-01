import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmdClientFournisseurComponent } from './new-cmd-client-fournisseur.component';

describe('NewCmdClientFournisseurComponent', () => {
  let component: NewCmdClientFournisseurComponent;
  let fixture: ComponentFixture<NewCmdClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCmdClientFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCmdClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
