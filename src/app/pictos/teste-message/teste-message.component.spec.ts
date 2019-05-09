import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteMessageComponent } from './teste-message.component';

describe('TesteMessageComponent', () => {
  let component: TesteMessageComponent;
  let fixture: ComponentFixture<TesteMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
