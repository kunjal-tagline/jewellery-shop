import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsComponent } from 'src/app/features/customer/show-products/show-products.component';

describe('ShowProductsComponent', () => {
  let component: ShowProductsComponent;
  let fixture: ComponentFixture<ShowProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowProductsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
