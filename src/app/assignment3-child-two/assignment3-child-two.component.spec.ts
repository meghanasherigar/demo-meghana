import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3ChildTwoComponent } from './assignment3-child-two.component';

describe('Assignment3ChildTwoComponent', () => {
  let component: Assignment3ChildTwoComponent;
  let fixture: ComponentFixture<Assignment3ChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment3ChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3ChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
