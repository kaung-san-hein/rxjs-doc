// RxJS v6+
// const { of } = rxjs;
// const { take } = rxjs.operators;

// //emit 1,2,3,4,5
// const source = of(1, 2, 3, 4, 5);
// //take the first emitted value then complete
// const example = source.pipe(take(1));
// //output: 1
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
// const { interval } = rxjs;
// const { take } = rxjs.operators;

// //emit value every 1s
// const interval$ = interval(1000);
// //take the first 5 emitted values
// const example = interval$.pipe(take(5));
// //output: 0,1,2,3,4
// const subscribe = example.subscribe(val => console.log(val));

// RxJS v6+
const { fromEvent } = rxjs;
const { take, tap } = rxjs.operators;

const oneClickEvent = fromEvent(document, 'click').pipe(
    take(1),
    tap(v => {
        document.getElementById(
            'locationDisplay'
        ).innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;
    })
);

const subscribe = oneClickEvent.subscribe();