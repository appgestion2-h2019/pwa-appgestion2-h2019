import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPictoComponent } from './afficher-picto.component';

describe('AfficherPictoComponent', () => {
  let component: AfficherPictoComponent;
  let fixture: ComponentFixture<AfficherPictoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherPictoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPictoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
