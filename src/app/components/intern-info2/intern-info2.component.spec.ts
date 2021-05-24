import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternInfo2Component } from './intern-info2.component';

describe('InternInfo2Component', () => {
  let component: InternInfo2Component;
  let fixture: ComponentFixture<InternInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternInfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
