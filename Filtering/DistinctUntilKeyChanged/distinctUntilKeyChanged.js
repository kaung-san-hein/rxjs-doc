// RxJS v6+
// const { from } = rxjs;
// const { distinctUntilKeyChanged } = rxjs.operators;

// // only output distinct values, based on the last emitted value
// const source$ = from([
//     { name: 'Brian' },
//     { name: 'Joe' },
//     { name: 'Joe' },
//     { name: 'Sue' }
// ]);

// source$
//     // custom compare based on name property
//     .pipe(distinctUntilKeyChanged('name'))
//     // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
//     .subscribe(console.log);

// RxJS v6+
const { fromEvent } = rxjs;
const { distinctUntilKeyChanged, pluck } = rxjs.operators;

const keys$ = fromEvent(document, 'keyup').pipe(
    distinctUntilKeyChanged('code'),
    pluck('key')
);

keys$.subscribe(console.log);