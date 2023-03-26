import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubmitButtonComponent } from './async-submit-button.component';

describe('AsyncSubmitButtonComponent', () => {
  let component: AsyncSubmitButtonComponent;
  let fixture: ComponentFixture<AsyncSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncSubmitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
