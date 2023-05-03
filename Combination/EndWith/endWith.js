// const { endWith } = rxjs.operators;
// const { of } = rxjs;

// const source$ = of('Hello', 'Friend', 'Goodbye');

// source$
//     // emit on completion
//     .pipe(endWith('Friend'))
//     // 'Hello', 'Friend', 'Goodbye', 'Friend'
//     .subscribe(console.log);

// const { endWith } = rxjs.operators;
// const { of } = rxjs;

// const source$ = of('Hello', 'Friend');

// source$
//     // emit on completion
//     .pipe(endWith('Goodbye', 'Friend'))
//     // 'Hello', 'Friend', 'Goodbye', 'Friend'
//     .subscribe(console.log);

const { endWith, finalize } = rxjs.operators;
const { of } = rxjs;

const source$ = of('Hello', 'Friend');

source$
    // emit on completion
    .pipe(
        endWith('Goodbye', 'Friend'),
        // this function is invoked when unsubscribe methods are called
        finalize(() => console.log('Finally'))
    )
    // 'Hello', 'Friend', 'Goodbye', 'Friend'
    .subscribe(val => console.log(val));
// 'Finally'