// const { map, concatAll } = rxjs.operators;
// const { of, interval } = rxjs;

// //emit a value every 2 seconds
// const source = interval(2000);
// const example = source.pipe(
//     //for demonstration, add 10 to and return as observable
//     map(val => of(val + 10)),
//     //merge values from inner observable
//     concatAll()
// );

// const subscribe = example.subscribe(val =>
//     console.log('Example with Basic Observable:', val)
// );

// const { map, concatAll } = rxjs.operators;
// const { interval } = rxjs;

// //create and resolve basic promise
// const samplePromise = val => new Promise(resolve => resolve(val));
// //emit a value every 2 seconds
// const source = interval(2000);

// const example = source.pipe(
//     map(val => samplePromise(val)),
//     //merge values from resolved promise
//     concatAll()
// );
// //output: 'Example with Promise 0', 'Example with Promise 1'...
// const subscribe = example.subscribe(val =>
//     console.log('Example with Promise:', val)
// );

const { take, concatAll } = rxjs.operators;
const { interval, of } = rxjs;

const obs1 = interval(1000).pipe(take(5));
const obs2 = interval(500).pipe(take(2));
const obs3 = interval(2000).pipe(take(1));
//emit three observables
const source = of(obs1, obs2, obs3);
//subscribe to each inner observable in order when previous completes
const example = source.pipe(concatAll());
/*
  output: 0,1,2,3,4,0,1,0
  How it works...
  Subscribes to each inner observable and emit values, when complete subscribe to next
  obs1: 0,1,2,3,4 (complete)
  obs2: 0,1 (complete)
  obs3: 0 (complete)
*/

const subscribe = example.subscribe(val => console.log(val));