import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeandTipsComponent } from './lifeand-tips.component';

describe('LifeandTipsComponent', () => {
  let component: LifeandTipsComponent;
  let fixture: ComponentFixture<LifeandTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeandTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeandTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
