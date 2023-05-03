const { interval, take, shareReplay } = rxjs;

const shared$ = interval(2000).pipe(
    take(6),
    shareReplay(2)
);

shared$.subscribe(x => console.log('sub A: ', x));
shared$.subscribe(y => console.log('sub B: ', y));

setTimeout(() => {
    shared$.subscribe(y => console.log('sub C: ', y));
}, 11000);