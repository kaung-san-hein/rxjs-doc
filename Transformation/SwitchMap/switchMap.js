// RxJS v6+
const { interval, fromEvent } = rxjs;
const { switchMap } = rxjs.operators;

fromEvent(document, 'click')
    .pipe(
        // restart counter on every click
        switchMap(() => interval(1000))
    )
    .subscribe(console.log);