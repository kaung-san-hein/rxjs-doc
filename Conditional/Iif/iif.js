// RxJS v6+
// const { iif, of, interval } = rxjs;
// const { mergeMap } = rxjs.operators;

// const r$ = of('R');
// const x$ = of('X');

// interval(1000)
//     .pipe(mergeMap(v => iif(() => v % 4 === 0, r$, x$)))
//     .subscribe(console.log);

// output: R, X, X, X, R, X, X, X, etc...

// const { fromEvent, iif, of } = rxjs;
// const { mergeMap, map, throttleTime, filter } = rxjs.operators;

// const r$ = of(`I'm saying R!!`);
// const x$ = of(`X's always win!!`);

// fromEvent(document, 'mousemove')
//     .pipe(
//         throttleTime(50),
//         filter((move) => move.clientY < 210),
//         map((move) => move.clientY),
//         mergeMap(yCoord => iif(() => yCoord < 110, r$, x$))
//     )
//     .subscribe(console.log);

const { fromEvent, iif, of, interval, pipe } = rxjs;
const { mergeMap } = rxjs.operators;

interval(1000)
    .pipe(
        mergeMap(v =>
            iif(
                () => !!(v % 2),
                of(v)
                // if not supplied defaults to EMPTY
            )
        )
        // output: 1,3,5...
    )
    .subscribe(console.log);