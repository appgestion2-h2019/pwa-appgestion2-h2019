import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageFinalComponent } from './affichage-final.component';

describe('AffichageFinalComponent', () => {
  let component: AffichageFinalComponent;
  let fixture: ComponentFixture<AffichageFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
