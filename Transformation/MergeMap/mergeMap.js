// RxJS v6+
// const { fromEvent, of } = rxjs;
// const { mergeMap, delay } = rxjs.operators;

// // faking network request for save
// const saveLocation = location => {
//     return of(location).pipe(delay(500));
// };
// // streams
// const click$ = fromEvent(document, 'click');

// click$
//     .pipe(
//         mergeMap((e) => {
//             return saveLocation({
//                 x: e.clientX,
//                 y: e.clientY,
//                 timestamp: Date.now()
//             });
//         })
//     )
//     // Saved! {x: 98, y: 170, ...}
//     .subscribe(r => console.log('Saved!', r));

// RxJS v6+
// const { fromEvent } = rxjs;
// const { ajax } = rxjs.ajax;
// const { mergeMap } = rxjs.operators;

// // free api url
// const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

// // streams
// const click$ = fromEvent(document, 'click');

// click$
//     .pipe(
//         /*
//          * Using mergeMap for example, but generally for GET requests
//          * you will prefer switchMap.
//          * Also, if you do not need the parameter like
//          * below you could use mergeMapTo instead.
//          * ex. mergeMapTo(ajax.getJSON(API_URL))
//          */
//         mergeMap(() => ajax.getJSON(API_URL))
//     )
//     // { userId: 1, id: 1, ...}
//     .subscribe(console.log);

// RxJS v6+
// const { of } = rxjs;
// const { mergeMap } = rxjs.operators;

// // helper to create promise
// const myPromise = val =>
//     new Promise(resolve => resolve(`${val} World From Promise!`));

// // emit 'Hello'
// const source$ = of('Hello');

// // map to promise and emit result
// source$
//     .pipe(mergeMap(val => myPromise(val)))
//     // output: 'Hello World From Promise'
//     .subscribe(val => console.log(val));

// RxJS v6+
// const { of } = rxjs;
// const { mergeMap } = rxjs.operators;

// // helper to create promise
// const myPromise = val =>
//     new Promise(resolve => resolve(`${val} World From Promise!`));

// // emit 'Hello'
// const source$ = of('Hello');

// source$
//     .pipe(
//         mergeMap(
//             val => myPromise(val),
//             /*
//             you can also supply a second argument which receives the source value and emitted
//             value of inner observable or promise
//           */
//             (valueFromSource, valueFromPromise) => {
//                 return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
//             }
//         )
//     )
//     // output: "Source: Hello, Promise: Hello World From Promise!"
//     .subscribe(val => console.log(val));

// RxJS v6+
const { interval } = rxjs;
const { mergeMap, take } = rxjs.operators;

// emit value every 1s
const source$ = interval(1000);

source$
    .pipe(
        mergeMap(
            // project
            val => interval(5000).pipe(take(2)),
            // resultSelector
            (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
            // concurrent
            2
        )
    )
    /*
          Output:
          [0, 0, 0, 0] <--1st inner observable
          [1, 1, 0, 0] <--2nd inner observable
          [0, 0, 1, 1] <--1st inner observable
          [1, 1, 1, 1] <--2nd inner observable
          [2, 2, 0, 0] <--3rd inner observable
          [3, 3, 0, 0] <--4th inner observable
  */
    .subscribe(val => console.log(val));