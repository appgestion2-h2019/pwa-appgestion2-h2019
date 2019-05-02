import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupConsultationComponent } from './popup-consultation.component';

describe('PopupConsultationComponent', () => {
  let component: PopupConsultationComponent;
  let fixture: ComponentFixture<PopupConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
