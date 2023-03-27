import { Component, NgModule, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { integerInputFilterObservable } from './misc';

@Component({
  selector: 'app-test',
  template: `<input type="string" [formControl]="fc" />`,
})
export class TestComponent implements OnInit {
  fc = new FormControl(0);

  ngOnInit(): void {
    integerInputFilterObservable(this.fc).subscribe();
  }
}

@NgModule({
  declarations: [TestComponent],
  imports: [ReactiveFormsModule],
  exports: [TestComponent],
})
export class TestModule {}

describe('Misc', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule],
    }).compileComponents();
  });

  it('should create the test component', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const test = fixture.componentInstance;
    const input = fixture.nativeElement.querySelector('input');
    console.log('input: ', input);

    test.fc.setValue(null);
    fixture.detectChanges();

    // send value
    input.value = 'x';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // send value
    input.value = '1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // send value
    input.value = '1.1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(test.fc.value).toBe(1);
  });
});
