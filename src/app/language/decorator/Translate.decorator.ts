import { getComponentTranslation } from '@lang/selectors';
import { select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

export function Translate({
  store = 'store',
  module,
  component,
  cdr = 'cdr',
  shouldMark = false
}: {
  store?: string;
  module: string;
  component?: string;
  cdr?: string;
  shouldMark?: boolean;
}) {
  return function(target) {
    if (shouldMark && !cdr) {
      console.warn(
        `${
          target.name
        } is using @Translate, asks for detectChanges, but does not inform ChageDetectionRef on the cdr parameter.`
      );
    }

    const originalInit = target.prototype.ngOnInit;
    const name =
      component || target.name.toLowerCase().replace('component', '');

    target.prototype.ngOnInit = function() {
      this.getTranslation();

      if (originalInit && typeof originalInit === 'function') {
        originalInit.apply(this, arguments);
      }
    };

    target.prototype.getTranslation = function() {
      if (!this[store]) {
        console.warn(
          `${
            target.name
          } is using @Translate but does not have the property ${store} as a Store from @ngrx/Store.`
        );
      }

      this.store
        .pipe(
          select(getComponentTranslation(module, name)),
          takeUntil(this.destroy$)
        )
        .subscribe(locales => {
          Object.keys(locales).forEach(key => (this[key] = locales[key]));
          if (shouldMark)  {
              this[cdr].markForCheck();
          }
        });
    };

    const originalDestroy = target.prototype.ngOnDestroy;

    if (typeof originalDestroy !== 'function') {
      console.warn(
        `${
          target.name
        } is using @TakeUntilDestroy but does not implement OnDestroy`
      );
    }

    target.prototype.destroy$ = new Subject<void>();

    target.prototype.ngOnDestroy = function() {
      this.destroy$.next();
      this.destroy$.complete();

      if (originalDestroy && typeof originalDestroy === 'function') {
        originalDestroy.apply(this, arguments);
      }
    };
  };
}
