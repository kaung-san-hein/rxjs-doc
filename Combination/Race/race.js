// const { mapTo } = rxjs.operators;
// const { interval } = rxjs;
// const { race } = rxjs;

// //take the first observable to emit
// const example = race(
//     //emit every 1.5s
//     interval(1500),
//     //emit every 1s
//     interval(1000).pipe(mapTo('1s won!')),
//     //emit every 2s
//     interval(2000),
//     //emit every 2.5s
//     interval(2500)
// );
// //output: "1s won!"..."1s won!"...etc
// const subscribe = example.subscribe(val => console.log(val));


const { delay, map } = rxjs.operators;
const { of, race } = rxjs;

//Throws an error and ignores the other observables.
const first = of('first').pipe(
    delay(100),
    map(_ => {
        throw 'error';
    })
);
const second = of('second').pipe(delay(200));
const third = of('third').pipe(delay(300));
// nothing logged
race(first, second, third).subscribe(val => console.log(val));