import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  selector: 'app-test',
  template: `<input type="text" appAutofocus />`,
})
export class TestComponent {}

describe('AutofocusDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutofocusDirective, TestComponent],
    }).compileComponents();
  });

  it('should test autofocus', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    const focusElt = document.activeElement;
    expect(focusElt).toBe(input);
  });
});
