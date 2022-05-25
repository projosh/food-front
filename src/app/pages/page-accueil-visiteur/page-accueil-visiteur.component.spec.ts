import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilVisiteurComponent } from './page-accueil-visiteur.component';

describe('PageAccueilVisiteurComponent', () => {
  let component: PageAccueilVisiteurComponent;
  let fixture: ComponentFixture<PageAccueilVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAccueilVisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAccueilVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
