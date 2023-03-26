import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncSubmitButtonComponent } from './async-submit-button/async-submit-button.component';



@NgModule({
  declarations: [
    AsyncSubmitButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsyncSubmitButtonComponent
  ]
})
export class WidgetsModule { }
