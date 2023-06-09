// RxJS v6+
const { of } = rxjs;
const { takeLast } = rxjs.operators;

const source = of('Ignore', 'Ignore', 'Hello', 'World!');
// take the last 2 emitted values
const example = source.pipe(takeLast(2));
// Hello, World!
const subscribe = example.subscribe(val => console.log(val));