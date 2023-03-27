import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-async-submit-button',
  templateUrl: './async-submit-button.component.html',
  styleUrls: ['./async-submit-button.component.scss'],
})
export class AsyncSubmitButtonComponent {
  faCircleNotch = faCircleNotch;
  @Input()
  formGroup: FormGroup = new FormGroup({});

  @Input()
  isSubmitting = false;

  @Input()
  icon = faCircleNotch;

  @Input()
  label = '';
}
