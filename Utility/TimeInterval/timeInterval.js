// RxJS v6+
const { fromEvent } = rxjs;
const { timeInterval, tap } = rxjs.operators;

fromEvent(document, 'mousedown')
    .pipe(timeInterval(), tap(console.log))
    .subscribe(
        i =>
            (document.body.innerText = `milliseconds since last click: ${i.interval}`)
    );