import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { En123Component } from './en123.component';

describe('En123Component', () => {
  let component: En123Component;
  let fixture: ComponentFixture<En123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ En123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(En123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
