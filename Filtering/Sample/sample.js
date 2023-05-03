// RxJS v6+
// const { interval } = rxjs;
// const { sample } = rxjs.operators;

// //emit value every 1s
// const source = interval(1000);
// //sample last emitted value from source every 2s
// const example = source.pipe(sample(interval(2000)));
// //output: 2..4..6..8..
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
// const { interval, zip, from } = rxjs;
// const { sample } = rxjs.operators;

// const source = zip(
//     //emit 'Joe', 'Frank' and 'Bob' in sequence
//     from(['Joe', 'Frank', 'Bob']),
//     //emit value every 2s
//     interval(2000)
// );
// //sample last emitted value from source every 2.5s
// const example = source.pipe(sample(interval(2500)));
// //output: ["Joe", 0]...["Frank", 1]...........
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
const { fromEvent, merge } = rxjs;
const { sample, mapTo } = rxjs.operators;

const listener = merge(
    fromEvent(document, 'mousedown').pipe(mapTo(false)),
    fromEvent(document, 'mousemove').pipe(mapTo(true))
)
    .pipe(sample(fromEvent(document, 'mouseup')))
    .subscribe(isDragging => {
        console.log('Were you dragging?', isDragging);
    });