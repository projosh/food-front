import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewProductComponent } from './page-new-product.component';

describe('PageNewProductComponent', () => {
  let component: PageNewProductComponent;
  let fixture: ComponentFixture<PageNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
