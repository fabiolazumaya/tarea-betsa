import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLeftComponent } from './cards-left.component';

describe('CardsLeftComponent', () => {
  let component: CardsLeftComponent;
  let fixture: ComponentFixture<CardsLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
