// const { fromEvent, of } = rxjs;
// const { mergeMap, delay, takeUntil } = rxjs.operators;

// const mousedown$ = fromEvent(document, 'mousedown');
// const mouseup$ = fromEvent(document, 'mouseup');

// mousedown$
//     .pipe(mergeMap(event => of(event).pipe(delay(700), takeUntil(mouseup$))))
//     .subscribe(event => console.log('Long Press!', event));

// RxJS v6+
const { of, merge } = rxjs;
const { mapTo, delay } = rxjs.operators;

//emit one item
const example = of(null);
//delay output of each by an extra second
const message = merge(
    example.pipe(mapTo('Hello')),
    example.pipe(mapTo('World!'), delay(1000)),
    example.pipe(mapTo('Goodbye'), delay(2000)),
    example.pipe(mapTo('World!'), delay(3000))
);
//output: 'Hello'...'World!'...'Goodbye'...'World!'
const subscribe = message.subscribe(val => console.log(val));