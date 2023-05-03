// RxJS v6+
// const { empty } = rxjs;

// //output: 'Complete!'
// const subscribe = empty().subscribe({
//     next: () => console.log('Next'),
//     complete: () => console.log('Complete!')
// });


// RxJS v6+
const { interval, fromEvent, merge, empty } = rxjs;
const { switchMap, scan, takeWhile, startWith, mapTo } = rxjs.operators;

const countdownSeconds = 10;
const setHTML = id => val => (document.getElementById(id).innerHTML = val);
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');
const interval$ = interval(1000).pipe(mapTo(-1));

const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

const timer$ = merge(pause$, resume$)
    .pipe(
        startWith(true),
        // if timer is paused return empty observable
        switchMap(val => (val ? interval$ : empty())),
        scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
        takeWhile(v => v >= 0)
    )
    .subscribe(setHTML('remaining'));