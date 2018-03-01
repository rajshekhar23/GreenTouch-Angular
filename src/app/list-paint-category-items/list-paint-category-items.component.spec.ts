import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaintCategoryItemsComponent } from './list-paint-category-items.component';

describe('ListPaintCategoryItemsComponent', () => {
  let component: ListPaintCategoryItemsComponent;
  let fixture: ComponentFixture<ListPaintCategoryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaintCategoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaintCategoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
