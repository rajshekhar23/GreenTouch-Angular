import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsGridComponent } from './all-products-grid.component';

describe('AllProductsGridComponent', () => {
  let component: AllProductsGridComponent;
  let fixture: ComponentFixture<AllProductsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
