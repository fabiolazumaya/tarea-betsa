import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardsComponent } from './big-cards.component';

describe('BigCardsComponent', () => {
  let component: BigCardsComponent;
  let fixture: ComponentFixture<BigCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
