// RxJS v6+
// const { defaultIfEmpty } = rxjs.operators;
// const { of } = rxjs;

// //emit 'Observable.of() Empty!' when empty, else any values from source
// const exampleOne = of().pipe(defaultIfEmpty('Observable.of() Empty!'));
// //output: 'Observable.of() Empty!'
// const subscribe = exampleOne.subscribe(val => console.log(val));

// RxJS v6+
const { defaultIfEmpty } = rxjs.operators;
const { empty } = rxjs;

//emit 'Observable.empty()!' when empty, else any values from source
const example = empty().pipe(defaultIfEmpty('Observable.empty()!'));
//output: 'Observable.empty()!'
const subscribe = example.subscribe(val => console.log(val));