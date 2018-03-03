import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBrochureComponent } from './product-brochure.component';

describe('ProductBrochureComponent', () => {
  let component: ProductBrochureComponent;
  let fixture: ComponentFixture<ProductBrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBrochureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
