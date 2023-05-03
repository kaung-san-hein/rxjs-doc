// RxJS v6+
// const { from } = rxjs;
// const { distinctUntilChanged } = rxjs.operators;

// // only output distinct values, based on the last emitted value
// const source$ = from([1, 2, 3, 1, 2, 3]);

// source$
//     .pipe(distinctUntilChanged())
//     // output: 1,2,3
//     .subscribe(console.log);

// const { from } = rxjs;
// const { distinctUntilChanged } = rxjs.operators;

// const sampleObject = { name: 'Test' };

// //Objects must be same reference
// const source$ = from([sampleObject, sampleObject, sampleObject]);

// // only emit distinct objects, based on last emitted value
// source$
//     .pipe(distinctUntilChanged())
//     // output: {name: 'Test'}
//     .subscribe(console.log);

const { from } = rxjs;
const { distinctUntilChanged } = rxjs.operators;

// only output distinct values, based on the last emitted value
const source$ = from([
    { name: 'Brian' },
    { name: 'Joe' },
    { name: 'Joe' },
    { name: 'Sue' }
]);

source$
    // custom compare for name
    .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
    // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
    .subscribe(console.log);