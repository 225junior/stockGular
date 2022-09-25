import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClientsFournisseursComponent } from './detail-clients-fournisseurs.component';

describe('DetailClientsFournisseursComponent', () => {
  let component: DetailClientsFournisseursComponent;
  let fixture: ComponentFixture<DetailClientsFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClientsFournisseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailClientsFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
