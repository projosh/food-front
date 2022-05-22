import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableAdminComponent } from './page-table-admin.component';

describe('PageTableAdminComponent', () => {
  let component: PageTableAdminComponent;
  let fixture: ComponentFixture<PageTableAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTableAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTableAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
