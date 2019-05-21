import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPictoComponent } from './ajouter-picto.component';

describe('AjouterPictoComponent', () => {
  let component: AjouterPictoComponent;
  let fixture: ComponentFixture<AjouterPictoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPictoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPictoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
