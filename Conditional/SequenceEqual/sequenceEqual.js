// RxJS v6+
// const { of, from } = rxjs;
// const { sequenceEqual, switchMap } = rxjs.operators;

// const expectedSequence = from([4, 5, 6]);

// of([1, 2, 3], [4, 5, 6], [7, 8, 9])
//     .pipe(switchMap(arr => from(arr).pipe(sequenceEqual(expectedSequence))))
//     .subscribe(console.log);

//output: false, true, false

const { from, fromEvent } = rxjs;
const { sequenceEqual, map, bufferCount, mergeMap, tap } = rxjs.operators;

const expectedSequence = from(['q', 'w', 'e', 'r', 't', 'y']);
const setResult = text => (document.getElementById('result').innerText = text);

fromEvent(document, 'keydown')
    .pipe(
        map((e) => e.key),
        tap(v => setResult(v)),
        bufferCount(6),
        mergeMap(keyDowns =>
            from(keyDowns).pipe(
                sequenceEqual(expectedSequence),
                tap(isItQwerty => setResult(isItQwerty ? 'WELL DONE!' : 'TYPE AGAIN!'))
            )
        )
    )
    .subscribe(e => console.log(`did you say qwerty? ${e}`));