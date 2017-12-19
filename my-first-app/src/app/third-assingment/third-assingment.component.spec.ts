import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAssingmentComponent } from './third-assingment.component';

describe('ThirdAssingmentComponent', () => {
  let component: ThirdAssingmentComponent;
  let fixture: ComponentFixture<ThirdAssingmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdAssingmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdAssingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
