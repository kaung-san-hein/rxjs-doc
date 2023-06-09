// RxJS v6+
// const { from } = rxjs;
// const { map } = rxjs.operators;

// //emit (1,2,3,4,5)
// const source = from([1, 2, 3, 4, 5]);
// //add 10 to each value
// const example = source.pipe(map(val => val + 10));
// //output: 11,12,13,14,15
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
const { from } = rxjs;
const { map } = rxjs.operators;

//emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
const source = from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
]);
//grab each persons name, could also use pluck for this scenario
const example = source.pipe(map(({ name }) => name));
//output: "Joe","Frank","Ryan"
const subscribe = example.subscribe(val => console.log(val));