// const { map, mergeAll } = rxjs.operators;
// const { of } = rxjs;

// const myPromise = val =>
//     new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
// //emit 1,2,3
// const source = of(1, 2, 3);

// const example = source.pipe(
//     //map each value to promise
//     map(val => myPromise(val)),
//     //emit result from source
//     mergeAll()
// );

// /*
//   output:
//   "Result: 1"
//   "Result: 2"
//   "Result: 3"
// */
// const subscribe = example.subscribe(val => console.log(val));


const { take, map, delay, mergeAll } = rxjs.operators;
const { interval } = rxjs;

const source = interval(500).pipe(take(5));

/*
  interval is emitting a value every 0.5s.  This value is then being mapped to interval that
  is delayed for 1.0s.  The mergeAll operator takes an optional argument that determines how
  many inner observables to subscribe to at a time.  The rest of the observables are stored
  in a backlog waiting to be subscribe.
*/
const example = source
    .pipe(
        map(val => source.pipe(delay(1000), take(3))),
        mergeAll(2)
    )
    .subscribe(val => console.log(val));