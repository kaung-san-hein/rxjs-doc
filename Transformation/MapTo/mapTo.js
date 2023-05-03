// RxJS v6+
// const { interval } = rxjs;
// const { mapTo } = rxjs.operators;

// //emit value every two seconds
// const source = interval(2000);
// //map all emissions to one value
// const example = source.pipe(mapTo('HELLO WORLD!'));
// //output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
const { fromEvent } = rxjs;
const { mapTo } = rxjs.operators;

//emit every click on document
const source = fromEvent(document, 'click');
//map all emissions to one value
const example = source.pipe(mapTo('GOODBYE WORLD!'));
//output: (click)'GOODBYE WORLD!'...
const subscribe = example.subscribe(val => console.log(val));