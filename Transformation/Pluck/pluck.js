// RxJS v6+
// const { from } = rxjs;
// const { pluck } = rxjs.operators;

// const source = from([
//     { name: 'Joe', age: 30 },
//     { name: 'Sarah', age: 35 }
// ]);
// //grab names
// const example = source.pipe(pluck('name'));
// //output: "Joe", "Sarah"
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
const { from } = rxjs;
const { pluck } = rxjs.operators;

const source = from([
    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
    //will return undefined when no job is found
    { name: 'Sarah', age: 35 }
]);
//grab title property under job
const example = source.pipe(pluck('job', 'title'));
//output: "Developer" , undefined
const subscribe = example.subscribe(val => console.log(val));