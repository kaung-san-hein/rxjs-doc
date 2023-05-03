// RxJS v6+
// const { of } = rxjs;
// const { scan } = rxjs.operators;

// const source = of(1, 2, 3);
// // basic scan example, sum over time starting with zero
// const example = source.pipe(scan((acc, curr) => acc + curr, 0));
// // log accumulated values
// // output: 1,3,6
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
// const { Subject } = rxjs;
// const { scan } = rxjs.operators;

// const subject = new Subject();
// //scan example building an object over time
// const example = subject.pipe(
//     scan((acc, curr) => Object.assign({}, acc, curr), {})
// );
// //log accumulated values
// const subscribe = example.subscribe(val =>
//     console.log('Accumulated object:', val)
// );
// //next values into subject, adding properties to object
// // {name: 'Joe'}
// subject.next({ name: 'Joe' });
// // {name: 'Joe', age: 30}
// subject.next({ age: 30 });
// // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
// subject.next({ favoriteLanguage: 'JavaScript' });

// RxJS v6+
// const { interval } = rxjs;
// const { scan, map, distinctUntilChanged } = rxjs.operators;

// // Accumulate values in an array, emit random values from this array.
// const scanObs = interval(1000)
//     .pipe(
//         scan((a, c) => [...a, c], []),
//         map(r => r[Math.floor(Math.random() * r.length)]),
//         distinctUntilChanged()
//     )
//     .subscribe(console.log);

// RxJS v6+
const { interval, of } = rxjs;
const { scan, delay, repeat, mergeMap } = rxjs.operators;

const fakeRequest = of('response').pipe(delay(2000));

// output:
// ['response'],
// ['response','response'],
// ['response','response','response'],
// etc...

interval(1000)
    .pipe(
        mergeMap(_ => fakeRequest),
        scan((all, current) => [...all, current], [])
    )
    .subscribe(console.log);

