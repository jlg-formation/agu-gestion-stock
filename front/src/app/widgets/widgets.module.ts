import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncSubmitButtonComponent } from './async-submit-button/async-submit-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AsyncIconButtonComponent } from './async-icon-button/async-icon-button.component';

@NgModule({
  declarations: [AsyncSubmitButtonComponent, AsyncIconButtonComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AsyncSubmitButtonComponent, AsyncIconButtonComponent],
})
export class WidgetsModule {}
