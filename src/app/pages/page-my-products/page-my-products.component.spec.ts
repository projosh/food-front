import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyProductsComponent } from './page-my-products.component';

describe('PageMyProductsComponent', () => {
  let component: PageMyProductsComponent;
  let fixture: ComponentFixture<PageMyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMyProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
