import {MonoTypeOperatorFunction, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {OnDestroy} from '@angular/core';

export class Destroyable implements OnDestroy {
  private destroyed$ = new Subject<void>();
  takeUntilDestroyed = <K>(): MonoTypeOperatorFunction<K> => takeUntil<K>(this.destroyed$);

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
