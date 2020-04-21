import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRightComponent } from './cards-right.component';

describe('CardsRightComponent', () => {
  let component: CardsRightComponent;
  let fixture: ComponentFixture<CardsRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
