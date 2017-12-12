import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenconassingmentComponent } from './senconassingment.component';

describe('SenconassingmentComponent', () => {
  let component: SenconassingmentComponent;
  let fixture: ComponentFixture<SenconassingmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenconassingmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenconassingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
