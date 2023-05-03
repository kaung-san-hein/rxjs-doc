// const { timer, combineLatest } = rxjs;

// // timerOne emits first value at 1s, then once every 4s
// const timerOne$ = timer(1000, 4000);
// // timerTwo emits first value at 2s, then once every 4s
// const timerTwo$ = timer(2000, 4000);
// // timerThree emits first value at 3s, then once every 4s
// const timerThree$ = timer(3000, 4000);

// // combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(
// //     ([timerValOne, timerValTwo, timerValThree]) => {
// //         console.log(
// //             `Timer One Latest: ${timerValOne}, Timer Two Latest: ${timerValTwo}, Timer Three Latest: ${timerValThree}`
// //         );
// //     }
// // );

// combineLatest(
//     timerOne$,
//     timerTwo$,
//     timerThree$,
//     // combineLatest also takes an optional projection function
//     (one, two, three) => {
//         return `Timer One (Proj) Latest: ${one}, Timer Two (Proj) Latest: ${two}, Timer Three (Proj) Latest: ${three}`;
//     }
// ).subscribe(console.log);

const { fromEvent, combineLatest } = rxjs;
const { mapTo, startWith, scan, tap, map } = rxjs.operators;

// elem refs
const redTotal = document.getElementById('red-total');
const blackTotal = document.getElementById('black-total');
const total = document.getElementById('total');

const addOneClick$ = id =>
    fromEvent(document.getElementById(id), 'click').pipe(
        // map every click to 1
        mapTo(1),
        // keep a running total
        scan((acc, curr) => acc + curr, 0),
        startWith(0)
    );

combineLatest(addOneClick$('red'), addOneClick$('black')).subscribe(
    ([red, black]) => {
        redTotal.innerHTML = red;
        blackTotal.innerHTML = black;
        total.innerHTML = red + black;
    }
);