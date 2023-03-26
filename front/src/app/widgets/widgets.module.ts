import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncSubmitButtonComponent } from './async-submit-button/async-submit-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AsyncSubmitButtonComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AsyncSubmitButtonComponent],
})
export class WidgetsModule {}
