// const { ajax } = rxjs.ajax;
// const { forkJoin } = rxjs;

// forkJoin(
//     // as of RxJS 6.5+ we can use a dictionary of sources
//     {
//         google: ajax.getJSON('https://api.github.com/users/google'),
//         microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
//         users: ajax.getJSON('https://api.github.com/users')
//     }
// )
//     // { google: object, microsoft: object, users: array }
//     .subscribe(console.log);

// const { interval, forkJoin, of } = rxjs;
// const { delay, take } = rxjs.operators;

// const myPromise = val =>
//     new Promise(resolve =>
//         setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
//     );

// const example = forkJoin({
//     //emit 'Hello' immediately
//     sourceOne: of('Hello'),
//     //emit 'World' after 1 second
//     sourceTwo: of('World').pipe(delay(1000)),
//     //emit 0 after 1 second
//     sourceThree: interval(1000).pipe(take(1)),
//     //emit 0...1 in 1 second interval
//     sourceFour: interval(1000).pipe(take(2)),
//     //promise that resolves to 'Promise Resolved' after 5 seconds
//     sourceFive: myPromise('RESULT')
// });

// const subscribe = example.subscribe(val => console.log(val));

// const { mergeMap } = rxjs.operators;
// const { forkJoin, of } = rxjs;

// const myPromise = val =>
//     new Promise(resolve =>
//         setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
//     );

// const source = of([1, 2, 3, 4, 5]);
// //emit array of all 5 results
// const example = source.pipe(mergeMap(q => forkJoin(...q.map(myPromise))));
// /*
//   output:
//   [
//    "Promise Resolved: 1",
//    "Promise Resolved: 2",
//    "Promise Resolved: 3",
//    "Promise Resolved: 4",
//    "Promise Resolved: 5"
//   ]
// */
// const subscribe = example.subscribe(val => console.log(val));

// const { delay, catchError } = rxjs.operators;
// const { forkJoin, of, throwError } = rxjs;

// /*
//   If any inner observables error, the error result
//   will be emitted by catchError.
// */
// const example = forkJoin({
//     // emit 'Hello' immediately
//     sourceOne: of('Hello'),
//     // emit 'World' after 1 second
//     sourceTwo: of('World').pipe(delay(1000)),
//     // throw error
//     sourceThree: throwError('This will error')
// }).pipe(catchError(error => of(error)));

// // output: 'This will Error'
// const subscribe = example.subscribe(val => console.log(val));

const { delay, catchError } = rxjs.operators;
const { forkJoin, of, throwError } = rxjs;

/*
  Emit values from successfully completed
  inner observables.
*/
const example = forkJoin({
    // emit 'Hello' immediately
    sourceOne: of('Hello'),
    // emit 'World' after 1 second
    sourceTwo: of('World').pipe(delay(1000)),
    // throw error
    sourceThree: throwError('This will error').pipe(catchError(error => of(error)))
});

/*
 * Output:
 * {
 *   sourceOne: "Hello",
 *   sourceTwo: "World",
 *   sourceThree: "This will error"
 * }
 */
const subscribe = example.subscribe(val => console.log(val));