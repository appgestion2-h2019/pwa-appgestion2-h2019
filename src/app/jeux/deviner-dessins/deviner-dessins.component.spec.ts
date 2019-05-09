import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevinerDessinsComponent } from './deviner-dessins.component';

describe('DevinerDessinsComponent', () => {
  let component: DevinerDessinsComponent;
  let fixture: ComponentFixture<DevinerDessinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevinerDessinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevinerDessinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
