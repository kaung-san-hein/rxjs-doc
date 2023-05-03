// RxJS v6+
const { interval } = rxjs;
const { exhaustMap, tap, take } = rxjs.operators;

const firstInterval = interval(1000).pipe(take(10));
const secondInterval = interval(1000).pipe(take(2));

const exhaustSub = firstInterval
    .pipe(
        exhaustMap(f => {
            console.log(`Emission Corrected of first interval: ${f}`);
            return secondInterval;
        })
    ).subscribe(s => console.log(s));