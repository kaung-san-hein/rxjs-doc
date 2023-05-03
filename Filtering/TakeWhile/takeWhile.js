// RxJS v6+
// const { of } = rxjs;
// const { takeWhile } = rxjs.operators;

// //emit 1,2,3,4,5
// const source$ = of(1, 2, 3, 4, 5);

// //allow values until value from source is greater than 4, then complete
// source$
//     .pipe(takeWhile(val => val <= 4))
//     // log: 1,2,3,4
//     .subscribe(val => console.log(val));

// RxJS v6.4+
// const { of } = rxjs;
// const { takeWhile, filter } = rxjs.operators;

// const source$ = of(1, 2, 3, 9);

// source$
//     // with inclusive flag, the value causing the predicate to return false will also be emitted
//     .pipe(takeWhile(val => val <= 3, true))
//     // log: 1, 2, 3, 9
//     .subscribe(console.log);

// RxJS v6+
const { of } = rxjs;
const { takeWhile, filter } = rxjs.operators;

// emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
const source$ = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

// allow values until value from source equals 3, then complete
source$
    .pipe(takeWhile(it => it === 3))
    // log: 3, 3, 3
    .subscribe(val => console.log('takeWhile', val));

source$
    .pipe(filter(it => it === 3))
    // log: 3, 3, 3, 3, 3, 3, 3
    .subscribe(val => console.log('filter', val));