import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMouveStockComponent } from './detail-mouve-stock.component';

describe('DetailMouveStockComponent', () => {
  let component: DetailMouveStockComponent;
  let fixture: ComponentFixture<DetailMouveStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMouveStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMouveStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
