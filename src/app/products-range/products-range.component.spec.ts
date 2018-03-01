import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRangeComponent } from './products-range.component';

describe('ProductsRangeComponent', () => {
  let component: ProductsRangeComponent;
  let fixture: ComponentFixture<ProductsRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
