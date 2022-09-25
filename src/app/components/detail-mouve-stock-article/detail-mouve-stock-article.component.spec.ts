import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMouveStockArticleComponent } from './detail-mouve-stock-article.component';

describe('DetailMouveStockArticleComponent', () => {
  let component: DetailMouveStockArticleComponent;
  let fixture: ComponentFixture<DetailMouveStockArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMouveStockArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMouveStockArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
