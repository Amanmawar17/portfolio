import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptComponent } from './except.component';

describe('ExceptComponent', () => {
  let component: ExceptComponent;
  let fixture: ComponentFixture<ExceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptComponent]
    });
    fixture = TestBed.createComponent(ExceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
