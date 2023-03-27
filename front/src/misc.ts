import { FormControl } from '@angular/forms';
import { map, pairwise, startWith, tap } from 'rxjs';

export const integerInputFilterObservable = (
  integerFC: FormControl<number | null>
) => {
  return integerFC.valueChanges.pipe(
    startWith(integerFC.value),
    map((x) => {
      if (typeof x !== 'string') {
        return x + '';
      }
      if (x === null) {
        return null;
      }
      return x;
    }),
    pairwise(),
    map(([previous, current]) => {
      console.log('current: ', current);
      console.log('previous: ', previous);
      if (current === null) {
        return null;
      }
      if (current.match(/^[0-9]*$/)) {
        return current;
      }

      if (previous === null) {
        return null;
      }
      return previous.replace(/[^0-9]/, '');
    }),
    map((x) => {
      if (x === null) {
        return null;
      }
      return +x;
    }),
    tap((value) => {
      integerFC.setValue(value, {
        emitEvent: false,
      });
    })
  );
};
