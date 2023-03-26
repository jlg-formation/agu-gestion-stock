import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncSubmitButtonComponent } from './async-submit-button/async-submit-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AsyncIconButtonComponent } from './async-icon-button/async-icon-button.component';
import { AutofocusDirective } from './autofocus.directive';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [
    AsyncSubmitButtonComponent,
    AsyncIconButtonComponent,
    AutofocusDirective,
    EllipsisPipe,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    AsyncSubmitButtonComponent,
    AsyncIconButtonComponent,
    AutofocusDirective,
    EllipsisPipe,
  ],
})
export class WidgetsModule {}
