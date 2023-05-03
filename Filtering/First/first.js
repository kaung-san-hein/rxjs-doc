// RxJS v6+
// const { from } = rxjs;
// const { first } = rxjs.operators;

// const source = from([1, 2, 3, 4, 5]);
// //no arguments, emit first value
// const example = source.pipe(first());
// //output: "First value: 1"
// const subscribe = example.subscribe(val => console.log(`First value: ${val}`));

// RxJS v6+
// const { from } = rxjs;
// const { first } = rxjs.operators;

// const source = from([1, 2, 3, 4, 5]);
// //emit first item to pass test
// const example = source.pipe(first(num => num === 5));
// //output: "First to pass test: 5"
// const subscribe = example.subscribe(val =>
//     console.log(`First to pass test: ${val}`)
// );

// RxJS v6+
const { from } = rxjs;
const { first } = rxjs.operators;

const source = from([1, 2, 3, 4, 5]);
//no value will pass, emit default
const example = source.pipe(first(val => val > 5, 'Nothing'));
//output: 'Nothing'
const subscribe = example.subscribe(val => console.log(val));