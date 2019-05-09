import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireJeuComponent } from './formulaire-jeu.component';

describe('FormulaireJeuComponent', () => {
  let component: FormulaireJeuComponent;
  let fixture: ComponentFixture<FormulaireJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
