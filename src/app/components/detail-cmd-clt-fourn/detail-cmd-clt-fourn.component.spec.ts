import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdCltFournComponent } from './detail-cmd-clt-fourn.component';

describe('DetailCmdCltFournComponent', () => {
  let component: DetailCmdCltFournComponent;
  let fixture: ComponentFixture<DetailCmdCltFournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCmdCltFournComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCmdCltFournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
