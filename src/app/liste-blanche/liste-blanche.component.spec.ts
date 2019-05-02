import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBlancheComponent } from './liste-blanche.component';

describe('ListeBlancheComponent', () => {
  let component: ListeBlancheComponent;
  let fixture: ComponentFixture<ListeBlancheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBlancheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBlancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
