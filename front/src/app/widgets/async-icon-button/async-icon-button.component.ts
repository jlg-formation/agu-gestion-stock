import { Component, Input, Output } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { catchError, finalize, Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-async-icon-button',
  templateUrl: './async-icon-button.component.html',
  styleUrls: ['./async-icon-button.component.scss'],
})
export class AsyncIconButtonComponent {
  faCircleNotch = faCircleNotch;
  isRunning = false;
  @Input()
  icon = faCircleNotch;

  @Input()
  observable: Observable<void> = of(undefined);

  @Input()
  label = 'To be defined for accessibility';

  runAction() {
    of(undefined)
      .pipe(
        tap(() => {
          this.isRunning = true;
        }),
        switchMap(() => this.observable),
        catchError((err) => {
          console.log('err: ', err);
          throw err;
        }),
        finalize(() => {
          this.isRunning = false;
        })
      )
      .subscribe();
  }
}
