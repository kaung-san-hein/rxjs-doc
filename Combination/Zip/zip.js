// // RxJS v6+
// const { delay } = rxjs.operators;
// const { of, zip } = rxjs;

// const sourceOne = of('Hello');
// const sourceTwo = of('World!');
// const sourceThree = of('Goodbye');
// const sourceFour = of('World!');
// //wait until all observables have emitted a value then emit all as an array
// const example = zip(
//     sourceOne,
//     sourceTwo.pipe(delay(1000)),
//     sourceThree.pipe(delay(2000)),
//     sourceFour.pipe(delay(3000))
// );
// //output: ["Hello", "World!", "Goodbye", "World!"]
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
// const { take } = rxjs.operators;
// const { interval, zip } = rxjs;

// //emit every 1s
// const source = interval(1000);
// //when one observable completes no more values will be emitted
// const example = zip(source, source.pipe(take(2)));
// //output: [0,0]...[1,1]
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
// const { fromEvent, zip } = rxjs;
// const { map } = rxjs.operators;

// const documentEvent = eventName =>
//     fromEvent(document, eventName).pipe(
//         map((e) => ({ x: e.clientX, y: e.clientY }))
//     );

// zip(documentEvent('mousedown'), documentEvent('mouseup')).subscribe(e =>
//     console.log(JSON.stringify(e))
// );

const { fromEvent, zip } = rxjs;
const { map } = rxjs.operators;

const eventTime = eventName =>
    fromEvent(document, eventName).pipe(map(() => new Date()));

const mouseClickDuration = zip(
    eventTime('mousedown'),
    eventTime('mouseup')
).pipe(map(([start, end]) => Math.abs(start.getTime() - end.getTime())));

mouseClickDuration.subscribe(console.log);