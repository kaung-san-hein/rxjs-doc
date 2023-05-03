// RxJS v6+
// const { from } = rxjs;
// const { last } = rxjs.operators;

// const source = from([1, 2, 3, 4, 5]);
// //no arguments, emit last value
// const example = source.pipe(last());
// //output: "Last value: 5"
// const subscribe = example.subscribe(val => console.log(`Last value: ${val}`));

// RxJS v6+
// const { from } = rxjs;
// const { last } = rxjs.operators;

// const source = from([1, 2, 3, 4, 5]);
// //emit last even number
// const exampleTwo = source.pipe(last(num => num % 2 === 0));
// //output: "Last to pass test: 4"
// const subscribeTwo = exampleTwo.subscribe(val =>
//     console.log(`Last to pass test: ${val}`)
// );

// RxJS v6+
const { from } = rxjs;
const { last } = rxjs.operators;

const source = from([1, 2, 3, 4, 5]);
//no values will pass given predicate, emit default
const exampleTwo = source.pipe(last(v => v > 5, 'Nothing!'));
//output: 'Nothing!'
const subscribeTwo = exampleTwo.subscribe(val => console.log(val));