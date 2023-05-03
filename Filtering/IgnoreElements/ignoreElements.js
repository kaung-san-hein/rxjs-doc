// RxJS v6+
// const { interval } = rxjs;
// const { take, ignoreElements } = rxjs.operators;

// //emit value every 100ms
// const source = interval(100);
// //ignore everything but complete
// const example = source.pipe(take(5), ignoreElements());
// //output: "COMPLETE!"
// const subscribe = example.subscribe(
//     val => console.log(`NEXT: ${val}`),
//     val => console.log(`ERROR: ${val}`),
//     () => console.log('COMPLETE!')
// );

// RxJS v6+
const { interval, throwError, of } = rxjs;
const { mergeMap, ignoreElements } = rxjs.operators;

//emit value every 100ms
const source = interval(100);
//ignore everything but error
const error = source.pipe(
    mergeMap(val => {
        if (val === 4) {
            return throwError(`ERROR AT ${val}`);
        }
        return of(val);
    }),
    ignoreElements()
);
//output: "ERROR: ERROR AT 4"
const subscribe = error.subscribe(
    val => console.log(`NEXT: ${val}`),
    val => console.log(`ERROR: ${val}`),
    () => console.log('SECOND COMPLETE!')
);