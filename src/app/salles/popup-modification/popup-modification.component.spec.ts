import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModificationComponent } from './popup-modification.component';

describe('PopupModificationComponent', () => {
  let component: PopupModificationComponent;
  let fixture: ComponentFixture<PopupModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
