import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DessinerComponent } from './dessiner.component';

describe('DessinerComponent', () => {
  let component: DessinerComponent;
  let fixture: ComponentFixture<DessinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DessinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DessinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
