// const { mapTo } = rxjs.operators;
// const { interval, merge } = rxjs;

// //emit every 2.5 seconds
// const first = interval(2500);
// //emit every 2 seconds
// const second = interval(2000);
// //emit every 1.5 seconds
// const third = interval(1500);
// //emit every 1 second
// const fourth = interval(1000);

// //emit outputs from one observable
// const example = merge(
//     first.pipe(mapTo('FIRST!')),
//     second.pipe(mapTo('SECOND!')),
//     third.pipe(mapTo('THIRD')),
//     fourth.pipe(mapTo('FOURTH'))
// );
// //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
// const subscribe = example.subscribe(val => console.log(val));

const { merge } = rxjs.operators;
const { interval } = rxjs;

//emit every 2.5 seconds
const first = interval(2500);
//emit every 1 second
const second = interval(1000);
//used as instance method
const example = first.pipe(merge(second));
//output: 0,1,0,2....
const subscribe = example.subscribe(val => console.log(val));