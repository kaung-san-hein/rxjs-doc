// RxJS v6+
// const { interval } = rxjs;
// const { bufferToggle } = rxjs.operators;

// //emit value every second
// const sourceInterval = interval(1000);
// //start first buffer after 5s, and every 5s after
// const startInterval = interval(5000);
// //emit value after 3s, closing corresponding buffer
// const closingInterval = val => {
//     console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
//     return interval(3000);
// };
// //every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values
// const bufferToggleInterval = sourceInterval.pipe(
//     bufferToggle(startInterval, closingInterval)
// );
// //log to console
// //ex. emitted buffers [4,5,6]...[9,10,11]
// const subscribe = bufferToggleInterval.subscribe(val =>
//     console.log('Emitted Buffer:', val)
// );

const { fromEvent, pipe } = rxjs;
const { bufferToggle, map } = rxjs.operators;

const getXYCoordinates = pipe(
    map(e => e.map(v => ({ x: v.clientX, y: v.clientY }))),
    map(e => JSON.stringify(e))
)
const buffer = pipe(
    bufferToggle(
        fromEvent(document, 'mousedown'),
        _ => fromEvent(document, 'mouseup')
    )
)
fromEvent(document, 'mousemove')
    .pipe(
        buffer,
        map(([down, up]) => [down.clientX, up.clientX])
    )
    .subscribe(console.log)  